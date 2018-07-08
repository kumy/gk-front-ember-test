import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  comment() {
    return faker.lorem.paragraph();
  },
  createdOnDateTime() {
    return faker.date.past();
  },
  author: association(),
  news: association(),
});
