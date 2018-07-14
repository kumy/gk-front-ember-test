import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import {startMirage} from 'geokrety-front/initializers/ember-cli-mirage';

module('Integration | Component | geokret/properties-table', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function() {
    this.server = startMirage();
    server.loadFixtures('geokrety-types');
    server.loadFixtures('moves-types');
  });
  hooks.afterEach(function() {
    this.server.shutdown();
  });

  test('it renders', async function(assert) {
    let geokret = server.create('geokret', 'typeTraditional', 'withGrab');
    this.set('geokret', geokret);

    await render(hbs`{{geokret/properties-table geokret=geokret}}`);
    assert.notEqual(this.element.textContent.trim(), '');
  });
});
