import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  requireWaypoint: DS.attr('boolean'),
  requireTrackingCode: DS.attr('boolean'),

  moves: DS.hasMany('move', {
    inverse: 'type',
    async: true
  })
});
