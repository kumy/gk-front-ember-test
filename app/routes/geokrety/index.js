import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').query('geokret', {
      include: 'owner',
      sort: '-created-on-date-time',
      // limit: 10
    });
  }
});
