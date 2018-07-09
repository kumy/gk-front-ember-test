export default function() {

  this.urlPrefix = 'https://api.geokrety.house.kumy.net';

  this.namespace = '/auth';
  this.post('/session', function() {
    return {"access_token": "fake"};
  });

  this.namespace = '/v1';
  this.get('/users');
  this.get('/users/:id');
  this.get('/news');
  this.get('/news/:id');
  this.get('/news/:id/author', 'users');
  this.get('/news/:id/news-comments');
  this.get('/news-comments');
  this.get('/news-comments/:id');

}
