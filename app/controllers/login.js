import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service('session'),

  actions: {
    authenticate: function() {
      this.username = 'kumy'
      this.password = 'sdfsdf'
      const credentials = this.getProperties('username', 'password');
      const authenticator = 'authenticator:token'; // or 'authenticator:jwt'

      this.get('session').authenticate(authenticator, credentials);
    }
  }
});
