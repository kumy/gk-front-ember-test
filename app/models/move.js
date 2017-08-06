import DS from 'ember-data';

export default DS.Model.extend({
	geokretId: DS.attr('number'),
	latitude: DS.attr('number'),
	longitude: DS.attr('number'),
	altitude: DS.attr('number'),
	country: DS.attr('string'),
	distance: DS.attr('number'),
	waypoint: DS.attr('string'),
	date: DS.attr('string'),
	dateAdded: DS.attr('string'),
	userId: DS.attr('number'),
	comment: DS.attr('string'),
	picturesCount: DS.attr('number'),
	commentsCount: DS.attr('number'),
	logtype: DS.attr('number'),
	username: DS.attr('string'),
	timestamp: DS.attr('string'),
	application: DS.attr('string'),
	applicationVersion: DS.attr('string'),
	user: DS.belongsTo('user', { inverse: 'moves' }),
	geokret: DS.belongsTo('geokret', { inverse: 'moves' }),
});
