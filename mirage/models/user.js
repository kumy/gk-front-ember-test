import { Model, hasMany, trait } from 'ember-cli-mirage';

export default Model.extend({
  news: hasMany('news', { inverse: 'author' })
});
