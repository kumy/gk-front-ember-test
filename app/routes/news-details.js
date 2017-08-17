import Ember from 'ember';
import News from '../models/news';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('news', params.news_id, {
      include: 'comments'
    });
  }
});
