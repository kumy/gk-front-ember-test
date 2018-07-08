import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr('string'),
  type: DS.attr('number'),
  createdOnDateTime: DS.attr('date'),
  updatedOnDateTime: DS.attr('date'),

  move: DS.belongsTo('move', {
    inverse: 'comments',
    async: true
  }),
  author: DS.belongsTo('user', {
    inverse: 'movesComments',
    async: true
  })
});
