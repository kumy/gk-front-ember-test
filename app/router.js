import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('login');
  this.route('logout');
  this.route('move');
  this.route('register-geokret');
  this.route('search');
  this.route('photo-gallery');
  this.route('downloads');
  this.route('hall-of-fame');
  this.route('help');
  this.route('users');
  this.route('user', {path: '/users/:user_id'});
  this.route('news');
  this.route('news-details', {path: '/news/:news_id'});
  this.route('geokrety');
  this.route('geokret-details', {path: '/geokrety/:geokret_id'});
});

export default Router;
