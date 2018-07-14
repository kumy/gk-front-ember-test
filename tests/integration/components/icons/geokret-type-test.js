import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import {startMirage} from 'geokrety-front/initializers/ember-cli-mirage';

module('Integration | Component | icons/geokret-type', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function() {
    this.server = startMirage();
    server.loadFixtures('geokrety-types');
  });
  hooks.afterEach(function() {
    this.server.shutdown();
  });

  test('it renders', async function(assert) {
    this.set('gktype', '0');

    await render(hbs`{{icons/geokret-type gktype=gktype}}`);
    assert.dom('[data-test-geokret-type-icon]').exists();

  });
});
