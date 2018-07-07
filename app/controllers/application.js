import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	session: service('session'),

	invalidateSession() {
		if (this.get('session.isAuthenticated')) {
			this.get('session').invalidate();
		}
	},
});
