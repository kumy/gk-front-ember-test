import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
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
  this.route('news');
  this.route('hall-of-fame');
  this.route('help');
});

export default Router;
