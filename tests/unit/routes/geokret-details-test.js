import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | geokret details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:geokret-details');
    assert.ok(route);
  });
});
