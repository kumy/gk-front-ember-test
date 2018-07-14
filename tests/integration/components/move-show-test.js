import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import {startMirage} from 'geokrety-front/initializers/ember-cli-mirage';

module('Integration | Component | move-show', function(hooks) {
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
    // let geokret = server.create('geokret', 'typeTraditional');
    let move = server.create('move', 'typeGrab');
    this.set('move', move);

    await render(hbs`{{move-show move=move}}`);

    assert.dom('[data-test-move-date]').exists();
    assert.dom('[data-test-move-comment]').exists();
    assert.dom('[data-test-move-comment]').hasText(move.comment);
  });
});
