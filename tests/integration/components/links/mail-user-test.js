import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | links/mail-user', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs `{{links/mail-user}}`);

    assert.dom('[data-test-fa-icon-envelope]').hasClass('fa-envelope');

    // Template block usage:
    await render(hbs `
      {{#links/mail-user}}
        template block text
      {{/links/mail-user}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
