import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  missing: DS.attr('boolean'),
  distance: DS.attr('number'),
  avatarUrl: DS.attr('string'),
  cachesCount: DS.attr('number'),
  picturesCount: DS.attr('number'),
  averageRating: DS.attr('number'),
  createdOnDateTime: DS.attr('date'),
  updatedOnDateTime: DS.attr('date'),

  owner: DS.belongsTo('user', {
    inverse: 'geokretyOwned',
    async: true
  }),
  lastPosition: DS.belongsTo('move', {
    // inverse: 'geokret',
    async: true
  }),
  lastLog: DS.belongsTo('move', {
    // inverse: 'geokret',
    async: true
  }),
  holder: DS.belongsTo('user', {
    inverse: 'geokretyInventory',
    async: true
  }),
  // avatar: DS.belongsTo('picture', {
  //   inverse: 'geokret',
  //   async: true
  // }),
  type: DS.belongsTo('geokrety-type', {
  //   inverse: 'geokrety',
    async: true
  }),
  // rates: DS.hasMany('rate', {
  //   inverse: 'geokrety',
  //   async: true
  // }),
  moves: DS.hasMany('move', {
    inverse: 'geokret',
    async: true
  })
});
