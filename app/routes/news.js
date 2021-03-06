import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').query('news', {
      include: 'author',
      sort: '-created-on-date-time',
      limit: 10
    });
  }
});
