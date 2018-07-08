export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  server.create('news', 'withoutAuthor');
  server.create('user', 'withFiveNews');
  // server.createList('user', 10);
  // server.createList('news', 10, {authorId: user.id});
}
