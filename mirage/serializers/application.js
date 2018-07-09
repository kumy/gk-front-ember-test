import JSONAPISerializer from 'ember-mirage-sauce/mirage-serializers/json-api-serializer';
import Ember from 'ember';

const {dasherize} = Ember.String;

export default JSONAPISerializer.extend({
  // alwaysIncludeLinkageData: true,
  keyForAttribute(key) {
    return dasherize(key);
  },
});
