import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  news: hasMany('news', { inverse: 'author' }),
  newsComments: hasMany('newsComment', { inverse: 'author' }),
});
