import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import {startMirage} from 'geokrety-front/initializers/ember-cli-mirage';

module('Integration | Component | geokret/star-rating', function(hooks) {
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

    await render(hbs`{{geokret/star-rating geokret=geokret}}`);
    assert.equal(this.element.textContent.trim(), '');
  });
});
