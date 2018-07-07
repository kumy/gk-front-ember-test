import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | tttt', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /tttt', async function(assert) {
    await visit('/tttt');

    assert.equal(currentURL(), '/tttt');
  });
});
