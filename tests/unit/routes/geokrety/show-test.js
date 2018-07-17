import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | geokret/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:geokrety.show');
    assert.ok(route);
  });
});
