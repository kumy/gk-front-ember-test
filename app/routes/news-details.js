import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('news', params.news_id, {
      // include: 'comments,comments.author,author',
      // include: 'author,news-comments',
      // include: 'author,newsComments',
      // limit: 1,
      // order: '-created-on-date-time'
    });
  }
});
