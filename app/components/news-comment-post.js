import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  newsComment: null,

  init() {
    this._super(...arguments);
    let newsComment = this.get('store').createRecord('news-comment', {});
    this.set('newsComment', newsComment);
    console.log("NewsComments init().");
  },

  actions: {
    submitAction() {
      console.log("New NewsComments submitted.")
      let newsComment = this.get('newsComment');

      let news = this.get('store').peekRecord('news', 177);
      newsComment.set('news', news);
      newsComment.save();
    },
    invalidForm() {
      console.log("NewsComments submitted, but invalid.")
    }
  }
});
