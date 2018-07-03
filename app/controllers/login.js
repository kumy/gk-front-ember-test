import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service('session'),
  username: 'kumy',
  password: 'sdfsdf',

	actions: {
		authenticate() {
			// let { username, password } = this.getProperties('username', 'password');

			// this.get('session').authenticate('authenticator:oauth2', username, password, 'basic').catch((reason) => {
			this.get('session').authenticate('authenticator:oauth2', 'kumy', 'sdfsdf', 'basic').catch((reason) => {
				this.set('errorMessage', reason);
			});

		}
	}
});
