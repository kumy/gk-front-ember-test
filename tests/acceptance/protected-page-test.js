import {module, test} from 'qunit';
import {visit, currentURL, fillIn, click} from '@ember/test-helpers';
import {authenticateSession, invalidateSession} from 'ember-simple-auth/test-support';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | protected page', function(hooks) {
  setupApplicationTest(hooks);

  // hooks.beforeEach(function() {
  //    this.owner.lookup('service:session').setProperties({
  //      user: { id: 2 }
  //    });
  // });

  test('visiting authenticated only page - not logged', async function(assert) {
    await invalidateSession();
    await visit('/contact');

    assert.notEqual(currentURL(), '/contact');
    assert.equal(currentURL(), '/login');
  });

  test('visiting authenticated only page - logged in', async function(assert) {
    await authenticateSession({userId: 1});
    await visit('/contact');

    assert.notEqual(currentURL(), '/login');
    assert.equal(currentURL(), '/contact');
  });

  test('visiting unauthenticated only page - logged in', async function(assert) {
    await invalidateSession(this.application);
    await visit('/login');

    assert.ok('[data-test-home-link]');
    assert.ok('[data-test-username-field] > input');
    assert.ok('[data-test-password-field] > input');
    assert.ok('[data-test-submit-button]');

    await fillIn('[data-test-username-field] > input', 'kumy');
    await fillIn('[data-test-password-field] > input', 'sdfsdf');
    await click('[data-test-submit-button]');

    assert.ok('[data-test-home-link]');
    await click('[data-test-home-link]');
    assert.equal(currentURL(), '/');
  });
});
