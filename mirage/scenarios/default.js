export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */


  server.loadFixtures('geokrety-types');
  server.loadFixtures('moves-types');

  server.create('news', 'withoutAuthor');
  server.create('user', 'withFiveNews');
  server.create('geokret', 'typeTraditional');
  server.create('geokret', 'typeTraditional', 'withGrab');
  server.create('geokret', 'typeTraditional', 'withDrop');
  server.create('geokret', 'typeTraditional', 'withMoves');
}
