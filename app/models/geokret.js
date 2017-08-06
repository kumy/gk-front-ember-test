import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	description: DS.attr('string'),
	date: DS.attr('date'),
	distance: DS.attr('number'),
	movesCount: DS.attr('number'),
	picturesCount: DS.attr('number'),
	lastPositionId: DS.attr('number'),
	lastMoveId: DS.attr('number'),
	handsOf: DS.attr('number'),
	missing: DS.attr('boolean'),
	type: DS.attr('string'),
	avatarId: DS.attr('number'),
	timestampOc: DS.attr('date'),
	timestamp: DS.attr('date'),
	trackingCode: DS.attr('string'),
	owner: DS.belongsTo('user', { inverse: 'geokretyOwned' }),
	holder: DS.belongsTo('user', { inverse: 'geokretyInventory' }),
	avatar: DS.belongsTo('picture', { inverse: 'geokret' }),
	moves: DS.hasMany('move', { inverse: 'geokret' }),
	lastMove: DS.belongsTo('move', { inverse: 'geokret' }),
	lastPosition: DS.belongsTo('move', { inverse: 'geokret' })
});
