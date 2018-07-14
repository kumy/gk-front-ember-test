import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | pictures/avatar-medium', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('url', "_someUrl_");

    await render(hbs`{{pictures/avatar-medium pictureUrl=url}}`);

    assert.equal(this.element.querySelector('[data-test-avatar-img]').getAttribute('src'), "_someUrl_");
  });
});
