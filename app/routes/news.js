import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').query('news', {
      include: 'author',
      sort: '-created-on-date-time',
      limit: 10
    });
  }
});
