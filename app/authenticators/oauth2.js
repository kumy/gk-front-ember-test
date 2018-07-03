import {computed} from '@ember/object';
import {isEmpty} from '@ember/utils';
import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrantAuthenticator.extend({
  clientId: 'geokrety-front',
  clientSecret: 'MAwikPWsSvO8e0U2gNlD',
  serverTokenEndpoint: 'http://192.168.125.64/oauth2/access_token',

  _clientIdHeader: computed('clientId', 'clientSecret', function() {
    const clientId = this.get('clientId');
    const clientSecret = this.get('clientSecret');

    if (!isEmpty(clientId)) {
      const base64ClientId = window.base64.encode(clientId.concat(':').concat(clientSecret));
      return {Authorization: `Basic ${base64ClientId}`};
    }
  })
});
