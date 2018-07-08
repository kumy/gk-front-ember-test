import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  author: belongsTo('user', { inverse: 'newsComments' }),
  news: belongsTo('news', { inverse: 'newsComments' }),
});
