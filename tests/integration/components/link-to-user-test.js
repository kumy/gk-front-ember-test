
import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | link to user', function(hooks) {
  setupRenderingTest(hooks);

  const User = EmberObject.extend({
    id: 5,
    name: "kumy",
    email: "contact@geokretymap.org",
    joinDate: "2018-04-17T20:30:02",
    timestamp: "2018-04-17T21:30:02",
    language: "fr",
    country: "fr",
    statpicId: "3",
    dailyMails: "0",
    ip: "192.168.0.1",
    latitude: "43.69",
    longitude: "6.84",
    observationRadius: "10",
    hour: "17",
    lastMail: "2018-04-17T22:30:02",
    lastLogin: "2018-04-17T23:30:02",
    secid: "3"
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    let user = User.create();
    this.set('user', user);

    await render(hbs `{{link-to-user}}`);
    assert.equal(this.$().text().trim(), 'Anonymous');

    await render(hbs `{{#link-to-user}}Hello{{/link-to-user}}`);
    assert.equal(this.$().text().trim(), 'Hello');

    await render(hbs `{{link-to-user user=user}}`);
    assert.equal(this.element.querySelector('a').textContent.trim(), 'kumy');
  });
});
