import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
// import {startMirage} from 'geokrety-front/initializers/ember-cli-mirage';

module('Integration | Component | geokret/moves-map', function(hooks) {
  setupRenderingTest(hooks);
  // hooks.beforeEach(function() {
  //   this.server = startMirage();
  //   server.loadFixtures('geokrety-types');
  //   server.loadFixtures('moves-types');
  // });
  // hooks.afterEach(function() {
  //   this.server.shutdown();
  // });

  test('it renders', async function(assert) {
    await render(hbs`{{geokret/moves-map}}`);
    assert.notEqual(this.element.textContent.trim(), '');
  });

  // test('change pin for first move', async function(assert) {
  //   let geokret = server.create('geokret', 'typeTraditional', 'withMoves', 'withGrab', 'typeVisit', 'withDrop', 'withMoves');
  //   this.set('geokret', geokret);
  //
  //   await render(hbs`{{geokret/moves-map geokret.moves}}`);
  //   assert.equal(this.element.textContent.trim(), 's');
  //   assert.equal(this.element.querySelectorAll('div'), "");
  // });
});
