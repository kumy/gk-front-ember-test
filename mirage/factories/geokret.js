import {Factory, faker, association, trait} from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.company.companyName();
  },
  description() {
    return faker.lorem.paragraph();
  },
  missing() {
    return faker.random.boolean();
  },
  distance() {
    return faker.random.number(10000);
  },
  avatarUrl() {
    return faker.image.avatar();
  },
  cachesCount() {
    return faker.random.number(10);
  },
  picturesCount() {
    return faker.random.number(10);
  },
  averageRating() {
    return faker.finance.amount(0, 5, 2);
  },
  createdOnDateTime() {
    return faker.date.past();
  },
  updatedOnDateTime() {
    return faker.date.recent();
  },
  owner: association(),
  lastPosition: association(),
  lastLog: association(),
  holder: association(),
  // avatar: association(),
  type: association(),
  // rates: association(),

  typeTraditional: trait({
    typeId: 0
  }),
  typeBook: trait({
    typeId: 1
  }),
  typeHuman: trait({
    typeId: 2
  }),
  typeCoin: trait({
    typeId: 3
  }),
  typeKretyPost: trait({
    typeId: 4
  }),

  withGrab: trait({
    afterCreate(geokret, server) {
      server.createList('move', geokret.cachesCount, 'typeGrab', { geokret });
    }
  }),
  withDrop: trait({
    afterCreate(geokret, server) {
      server.createList('move', geokret.cachesCount, 'typeDrop', { geokret });
    }
  }),
  withMoves: trait({
    afterCreate(geokret, server) {
      server.createList('move', geokret.cachesCount, 'randomType', { geokret });
    }
  })
});
