import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({

  model() {
    return hash({
      news: this.get('store').query('news', {
        include: 'author',
        sort: '-created-on-date-time',
        page: {
          size: 3,
          number: 1
        }
      }),
    });
  },

  // setupController(controller, model) {
  //   this._super(controller, model);
  //   controller.set('news', model);
  // }
});
