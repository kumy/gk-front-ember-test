import DS from 'ember-data';
import {
  validator,
  buildValidations
} from 'ember-cp-validations';

const Validations = buildValidations({
  comment: {
    description: 'Comment',
    validators: [
      validator('presence', true),
      validator('length', {
        min: 10,
        max: 1000
      })
    ]
  },
}, {
  debounce: 500
});

export default DS.Model.extend(Validations, {
  date: DS.attr('string'),
  newsId: DS.attr('number'),
  userId: DS.attr('number'),
  comment: DS.attr('string'),
  icon: DS.attr('string'),
  news: DS.belongsTo('news', {
    inverse: 'comments'
  }),
  author: DS.belongsTo('user', {
    inverse: 'newsComments'
  }),
});
