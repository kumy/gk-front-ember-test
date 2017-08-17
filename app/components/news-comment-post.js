import Ember from 'ember';

export default Ember.Component.extend({
  // comment: null,
  // model: "news-comment",
  // model2
  // init() {
  //   this._super(...arguments);
  //   // this.set('model2', new User());
  //
  // },
  // nc: News,
  // store: Ember.inject.service(),
  // nc: function() {
  //   console.log("HELLO WORLD");
  //   let news = this.get('store').createRecord('news', {});
  //   console.log(news);
  //   return news;
  //   // return this.get('store').findRecord('news', 168);
  // },
  // init() {
  //   let nc = this.get('store').createRecord('news');
  //   this.set('nc', nc);
  //   return nc;
  // },
  // nc: this.get('store').createRecord('news'),

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
    },
    invalidForm() {
      console.log("NewsComments submitted, but invalid.")
    },
  }
});
