import DS from 'ember-data';
import {validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
  // date: {
  //   validators: [
  //   ]
  // },
  news: validator('belongs-to'),
  author: validator('belongs-to'),
  comment: {
    description: 'Comment',
    validators: [
      validator('presence', true),
      validator('length', {
        min: 10,
        max: 1000
      })
    ]
  }
}, {debounce: 500});

export default DS.Model.extend(Validations, {
  comment: DS.attr('string'),
  createdOnDateTime: DS.attr('string'),

  author: DS.belongsTo('user', {
    inverse: 'newsComments',
    async: true
  }),
  news: DS.belongsTo('news', {
    inverse: 'newsComments',
    async: true
  })
});
