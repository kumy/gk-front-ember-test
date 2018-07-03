import EmberObject from '@ember/object';
import ResetScrollPositionMixin from 'geokrety-front/mixins/reset-scroll-position';
import { module, test } from 'qunit';

module('Unit | Mixin | reset scroll position');

// Replace this with your real tests.
test('it works', function(assert) {
  let ResetScrollPositionObject = EmberObject.extend(ResetScrollPositionMixin);
  let subject = ResetScrollPositionObject.create();
  assert.ok(subject);
});
