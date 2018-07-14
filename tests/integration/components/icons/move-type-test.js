import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import {startMirage} from 'geokrety-front/initializers/ember-cli-mirage';

module('Integration | Component | icons/move-type', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function() {
    this.server = startMirage();
    server.loadFixtures('geokrety-types');
    server.loadFixtures('moves-types');
  });
  hooks.afterEach(function() {
    this.server.shutdown();
  });

  test('it renders typeTraditional typeGrab', async function(assert) {
    let geokret = server.create('geokret', 'typeTraditional');
    let move = server.create('move', 'typeGrab', {geokret});
    this.set('move', move);

    await render(hbs`{{icons/move-type move=move}}`);
    assert.equal(this.element.querySelector('img').getAttribute('src'), 'https://cdn.geokrety.org/images/log-icons/0/1.png');
  });

  test('it renders typeHuman typeVisit', async function(assert) {
    let geokret = server.create('geokret', 'typeHuman');
    let move = server.create('move', 'typeVisit', {geokret});
    this.set('move', move);

    await render(hbs`{{icons/move-type move=move}}`);
    assert.equal(this.element.querySelector('img').getAttribute('src'), 'https://cdn.geokrety.org/images/log-icons/2/5.png');
  });
});
