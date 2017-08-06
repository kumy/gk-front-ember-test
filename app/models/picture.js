import DS from 'ember-data';

export default DS.Model.extend({
	type: DS.attr('number'),
	itemId: DS.attr('number'),
	geokretId: DS.attr('number'),
	ownerId: DS.attr('number'),
	filename: DS.attr('string'),
	pictureUrl: DS.attr('string'),
	thumbnailUrl: DS.attr('string'),
	description: DS.attr('string'),
	timestamp: DS.attr('string'),
	owner: DS.belongsTo('user', { inverse: 'picturesOwned' }),
	geokret: DS.belongsTo('geokret', { inverse: 'avatar' }),
	user: DS.belongsTo('user', { inverse: 'avatar' }),
});
