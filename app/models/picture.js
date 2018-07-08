import DS from 'ember-data';

export default DS.Model.extend({
	type: DS.attr('number'),
  comment: DS.attr('string'),
	filename: DS.attr('string'),
	fileUrl: DS.attr('string'),
  createdOnDateTime: DS.attr('date'),
  updatedOnDateTime: DS.attr('date'),

	owner: DS.belongsTo('user', { inverse: 'picturesOwned' }),
  user: DS.belongsTo('user', { inverse: 'avatar' }),
	geokret: DS.belongsTo('geokret', { inverse: 'avatar' }),
	move: DS.belongsTo('move', { inverse: 'pictures' }),
});
