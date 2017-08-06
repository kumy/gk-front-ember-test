import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

	beforeModel(transition) {
		this.debug('beforeModel: Coucou');
		// this._super(...arguments);
		const owner = Ember.getOwner(this);
		const routeName = owner.lookup('router:main').currentRouteName;
		this.debug('beforeModel: routeName: ' + routeName);

		if (!this.get('session.isAuthenticated')) {
			this.debug('beforeModel: not authenticated');
			if (routeName) {
				// Abort transition if we come from somewhere
				transition.abort();
			} else {
				this.transitionTo('/');
			}
		} else {
			this.debug('beforeModel: authenticated');
			var controller = this.controllerFor('application');
			controller.invalidateSession();
		}
	}
});
