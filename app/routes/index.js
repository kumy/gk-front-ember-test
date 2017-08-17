import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      news: this.get('store').query('news', {
        order: '-date',
        limit: 3
      }),
    });
  },

  // setupController(controller, model) {
  //   this._super(controller, model);
  //   controller.set('news', model);
  // }
});
