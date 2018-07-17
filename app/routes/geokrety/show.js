import Route from '@ember/routing/route';

export default Route.extend({
  // lastPosition: [ 43.594, 6.952 ],
  model(params) {
    return this.get('store').findRecord('geokret', params.geokret_id, {
      // include: 'owner',
      include: 'owner,type,moves,moves.author,moves.type',
      // limit: 1,
      // sort: '-created-on-date-time,news-comments.created-on-date-time'
    });
  }
});
