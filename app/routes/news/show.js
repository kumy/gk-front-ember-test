import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('news', params.news_id, {
      include: 'author,news-comments,news-comments.author',
      // limit: 1,
      // sort: '-created-on-date-time,news-comments.created-on-date-time'
    });
  }
});
