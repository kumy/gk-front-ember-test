'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'geokrety-front',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    fastboot: {
      hostWhitelist: ['192.168.125.64:4200', 'front.geokrety.house.kumy.net', /^localhost:\d+$/, /^front.geokrety.house.kumy.net:\d+$/]
    }
  };

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: 'https://api.geokrety.house.kumy.net/auth/session',
    tokenPropertyName: 'access_token',
    authorizationHeaderName: 'Authorization', // Header name added to each API request
    authorizationPrefix: 'JWT ', // Prefix added to each API request
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
