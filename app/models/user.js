import DS from 'ember-data';
import {
  validator,
  buildValidations
} from 'ember-cp-validations';

const Validations = buildValidations({
  username: {
    description: 'Comment',
    validators: [
      validator('presence', true),
      validator('length', {
        min: 10,
        max: 125
      })
    ]
  },
});

export default DS.Model.extend(Validations, {
	username: DS.attr('string'),
	email: DS.attr('string'),
	joined: DS.attr('date'),
	timestamp: DS.attr('date'),
	language: DS.attr('string'),
	country: DS.attr('string'),
	statpicId: DS.attr('number'),
	statpicUrl: DS.attr('string'),
	oldPassword: DS.attr('string'),
	password: DS.attr('string'),
	dailyMails: DS.attr('boolean'),
	ip: DS.attr('string'),
	latitude: DS.attr('number'),
	longitude: DS.attr('number'),
	observationRadius: DS.attr('number'),
	hour: DS.attr('number'),
	lastMail: DS.attr('date'),
	lastLogin: DS.attr('date'),
	secid: DS.attr('string'),
	message: DS.attr('string'),
	backgroundUrl: DS.attr('string'),
	avatar: DS.belongsTo('picture', { inverse: 'user' }),
	geokretyOwnedCount: DS.attr('number', {default: 0}),
	geokretyInventoryCount: DS.attr('number', {default: 0}),
	geokretyOwned: DS.hasMany('geokret', {inverse: 'owner'}),
	geokretyInventory: DS.hasMany('geokret', {inverse: 'holder'}),
	picturesOwned: DS.hasMany('picture', {inverse: 'owner'}),
	moves: DS.hasMany('move', {inverse: 'user'}),
	news: DS.hasMany('news', {inverse: 'author'}),
	newsComments: DS.hasMany('newsComments', {inverse: 'author'}),
});
