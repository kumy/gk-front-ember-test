import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  author: belongsTo('user'),
  newsComments: hasMany('newsComment')
});
