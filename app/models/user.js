import DS from 'ember-data';
import {validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
  newsComments: validator('belongs-to'),
  username: {
    description: 'Comment',
    validators: [
      validator('presence', true),
      validator('length', {
        min: 10,
        max: 125
      })
    ]
  }
});

export default DS.Model.extend(Validations, {
  name: DS.attr('string'),
  email: DS.attr('string'),
  language: DS.attr('string'),
  country: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  dailyMails: DS.attr('boolean'),
  observationRadius: DS.attr('number'),
  hour: DS.attr('number'),
  statpicUrl: DS.attr('string'),
  avatarUrl: DS.attr('string'),
  secid: DS.attr('string'),
  joinedDateTime: DS.attr('date'),
  lastUpdateDateTime: DS.attr('date'),
  lastMailDateTime: DS.attr('date'),
  lastLoginDateTime: DS.attr('date'),

  news: DS.hasMany('news', {
    inverse: 'author',
    async: true
  }),
  newsComments: DS.hasMany('newsComments', {
    inverse: 'author',
    async: true
  }),
  statpicTemplate: DS.belongsTo('statpicTemplate', {
    inverse: 'users',
    async: true
  }),
  avatar: DS.belongsTo('picture', {
    inverse: 'user',
    async: true
  }),
  moves: DS.hasMany('move', {
    inverse: 'author',
    async: true
  }),
  movesComments: DS.hasMany('newsComments', {
    inverse: 'author',
    async: true
  }),

  // geokretyOwnedCount: DS.attr('number', {default: 0}),
  // geokretyInventoryCount: DS.attr('number', {default: 0}),
  geokretyOwned: DS.hasMany('geokret', {
    inverse: 'owner',
    async: true
  }),
  geokretyInventory: DS.hasMany('geokret', {
    inverse: 'holder',
    async: true
  }),
  // picturesOwned: DS.hasMany('picture', {inverse: 'owner'}),
});
