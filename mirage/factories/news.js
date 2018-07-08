import {Factory, faker, association, trait} from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.company.bs();
  },
  content() {
    return faker.lorem.paragraph();
  },
  username() {
    return faker.internet.userName();
  },
  commentsCount() {
    return faker.random.number(10);
  },
  createdOnDateTime() {
    return faker.date.past();
  },
  lastCommentDateTime() {
    return faker.date.recent();
  },
  author: association(),

  withoutAuthor: trait({
    authorId: null,
    username() {
      return faker.internet.userName();
    }
  }),

  afterCreate(news, server) {
    server.createList('newsComment', news.commentsCount, { news });
  }
});
