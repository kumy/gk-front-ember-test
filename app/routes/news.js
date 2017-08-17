import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').query('news', {
      order: '-date',
      limit: 10
    });
  }
});
