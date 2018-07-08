import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | register photo gallery', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:photo-gallery');
    assert.ok(route);
  });
});
