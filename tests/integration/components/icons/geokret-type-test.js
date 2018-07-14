import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | icons/geokret-type', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('gktype', '0');

    await render(hbs`{{icons/geokret-type gktype=gktype}}`);
    assert.equal(this.element.textContent.trim(), '');
  });
});
