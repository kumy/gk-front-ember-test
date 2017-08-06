import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),

	invalidateSession() {
		this.debug('invalidateSession: Coucou');
		if (this.get('session.isAuthenticated')) {
			this.debug('invalidateSession: authenticated');
			this.get('session').invalidate();
		} else {
			this.debug('invalidateSession: NOT authenticated');
		}
	},
});
