import DS from 'ember-data';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default DS.JSONAPIAdapter.extend(TokenAuthorizerMixin, {
	host: 'https://api.geokrety.house.kumy.net',
  // authorizer: 'authorizer:oauth2',
  namespace: 'v1',
  coalesceFindRequests: true
});
