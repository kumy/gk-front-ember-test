import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

  store: service(),
  newsComment: null,

  init() {
    this._super(...arguments);
    let newsComment = this.get('store').createRecord('news-comment', {});
    this.set('newsComment', newsComment);
  },

  actions: {
    submitAction() {
      let newsComment = this.get('newsComment');

      let news = this.get('store').peekRecord('news', 177);
      newsComment.set('news', news);
      newsComment.save();
    },
    invalidForm() {}
  }
});
