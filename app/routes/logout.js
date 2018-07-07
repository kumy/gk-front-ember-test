import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { getOwner } from '@ember/application';

export default Route.extend(AuthenticatedRouteMixin, {

	beforeModel(transition) {
		// this._super(...arguments);
		const owner = getOwner(this);
		const routeName = owner.lookup('router:main').currentRouteName;

		if (!this.get('session.isAuthenticated')) {
			if (routeName) {
				// Abort transition if we come from somewhere
				transition.abort();
			} else {
				this.transitionTo('/');
			}
		} else {
			var controller = this.controllerFor('application');
			controller.invalidateSession();
		}
	}
});
