import DS from 'ember-data';

export default DS.Model.extend({
  waypoint: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  comment: DS.attr('string'),
  username: DS.attr('string'),
  application: DS.attr('string'),
  applicationVersion: DS.attr('string'),
  altitude: DS.attr('number'),
  country: DS.attr('string'),
  distance: DS.attr('number'),
  commentsCount: DS.attr('number'),
  picturesCount: DS.attr('number'),
  createdOnDateTime: DS.attr('date'),
  updatedOnDateTime: DS.attr('date'),

  type: DS.belongsTo('moves-type', {
    inverse: 'moves',
    async: true
  }),
  author: DS.belongsTo('user', {
    inverse: 'moves',
    async: true
  }),
  geokret: DS.belongsTo('geokret', {
    inverse: 'moves',
    async: true
  }),
  comments: DS.hasMany('movesComment', {
    inverse: 'move',
    async: true
  }),
  pictures: DS.hasMany('pictures', {
    inverse: 'move',
    async: true
  })
});
