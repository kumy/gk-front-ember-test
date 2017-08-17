import DS from 'ember-data';
import {
  validator,
  buildValidations
} from 'ember-cp-validations';

const Validations = buildValidations({
  content: {
    description: 'content',
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
	date: DS.attr('string'),
	czasPostu: DS.attr('string'),
	title: DS.attr('string'),
	content: DS.attr('string'),
	username: DS.attr('string'),
	userId: DS.attr('number'),
	commentsCount: DS.attr('number'),
	lastComment: DS.attr('string'),
	author: DS.belongsTo('user', { inverse: 'news' }),
	comments: DS.hasMany('newsComment', { inverse: 'news' }),
});
