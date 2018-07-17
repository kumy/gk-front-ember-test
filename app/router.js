import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({location: config.locationType, rootURL: config.rootURL});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('login');
  this.route('logout');
  this.route('move');
  this.route('search');
  this.route('photo-gallery');
  this.route('downloads');
  this.route('hall-of-fame');
  this.route('help');
  this.route('users', function() {
    this.route('show', {path: '/:user_id'});
  });
  this.route('news', function() {
    this.route('show', {path: '/:news_id'});
  });
  this.route('geokrety', function() {
    this.route('show', {path: '/:geokret_id'});
    this.route('create', {path: '/create'});
  });
});

export default Router;
