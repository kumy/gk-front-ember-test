import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | gknum', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders 1', async function(assert) {
    this.set('inputValue', '1');
    await render(hbs `{{gknum inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'GK0001');
  });

  test('it renders 1234', async function(assert) {
    this.set('inputValue', '1234');
    await render(hbs `{{gknum inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'GK04D2');
  });

  test('it renders 46464', async function(assert) {
    this.set('inputValue', '46464');
    await render(hbs `{{gknum inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'GKB580');
  });

  test('it renders 65536', async function(assert) {
    this.set('inputValue', '65536');
    await render(hbs `{{gknum inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'GK10000');
  });

  test('it renders 65536', async function(assert) {
    this.set('inputValue', 65536);
    await render(hbs `{{gknum inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'GK10000');
  });
});
