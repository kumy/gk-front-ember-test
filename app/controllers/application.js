import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	session: service('session'),

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
