import {Factory, faker, association, trait} from 'ember-cli-mirage';

export default Factory.extend({
  waypoint() {
    return 'OC' + faker.random.number(10000).toString(16);
  },
  latitude() {
    return faker.address.latitude();
  },
  longitude() {
    return faker.address.longitude();
  },
  comment() {
    return faker.lorem.paragraph();
  },
  username() {
    return faker.internet.userName();
  },
  application() {
    return faker.random.arrayElement(["www", "c:geo", "GeoKretyLogguer", "curl"]);
  },
  applicationVersion() {
    return faker.system.semver();
  },
  altitude() {
    return faker.random.number(1111);
  },
  country() {
    return faker.address.country();
  },
  distance() {
    return faker.random.number(10000);
  },
  commentsCount() {
    return faker.random.number(10);
  },
  picturesCount() {
    return faker.random.number(10);
  },
  createdOnDateTime() {
    return faker.date.past();
  },
  updatedOnDateTime() {
    return faker.date.recent();
  },
  type: association(),
  author: association(),
  // geokret: association(),

  typeDrop: trait({
    typeId: 0
  }),
  typeGrab: trait({
    typeId: 1
  }),
  typeComment: trait({
    typeId: 2
  }),
  typeSeen: trait({
    typeId: 3
  }),
  typeArchive: trait({
    typeId: 4
  }),
  typeVisit: trait({
    typeId: 5
  }),
  randomType: trait({
    typeId() {
      return faker.random.number({min:0, max:5});
    }
  })

});
