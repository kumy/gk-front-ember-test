import {Factory, faker, trait} from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.internet.userName();
  },
  email() {
    return faker.internet.email();
  },
  password() {
    return faker.internet.password();
  },
  language() {
    return faker.address.countryCode();
  },
  country() {
    return faker.address.countryCode();
  },
  latitude() {
    return faker.address.latitude();
  },
  longitude() {
    return faker.address.longitude();
  },
  dailyMails() {
    return faker.random.boolean();
  },
  observationRadius() {
    return faker.random.number(10);
  },
  hour() {
    return faker.random.number(23);
  },
  statpicUrl() {
    return faker.image.imageUrl(220, 50, "abstract");
  },
  avatarUrl() {
    return faker.image.avatar();
  },
  secid() {
    return faker.random.uuid();
  },
  joinedDateTime() {
    return faker.date.past();
  },
  lastUpdateDateTime() {
    return faker.date.recent();
  },
  lastMailDateTime() {
    return faker.date.recent();
  },
  lastLoginDateTime() {
    return faker.date.recent();
  },

  withFiveNews: trait({
    afterCreate(author, server) {
      server.createList('news', 5, { author });
    }
  })
});
