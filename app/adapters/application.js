import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
	host: 'http://192.168.125.64',
  authorizer: 'authorizer:oauth2'
});
