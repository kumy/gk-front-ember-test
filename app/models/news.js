import DS from 'ember-data';
import {validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
  comments: validator('belongs-to'),
  content: {
    description: 'content',
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
  title: DS.attr('string'),
  content: DS.attr('string'),
  username: DS.attr('string'),
  commentsCount: DS.attr('number'),
  createdOnDateTime: DS.attr('string'),
  lastCommentDateTime: DS.attr('string'),

  author: DS.belongsTo('user', {
    inverse: 'news',
    async: true
  }),
  newsComments: DS.hasMany('newsComment', {
    inverse: 'news',
    async: true
  })
});
