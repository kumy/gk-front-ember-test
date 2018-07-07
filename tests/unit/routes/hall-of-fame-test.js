import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | hall of fame', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:hall-of-fame');
    assert.ok(route);
  });
});
