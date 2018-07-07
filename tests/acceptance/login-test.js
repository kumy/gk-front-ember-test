import {module, test} from 'qunit';
import {visit, currentURL, fillIn, click} from '@ember/test-helpers';
import {currentSession, invalidateSession} from 'ember-simple-auth/test-support';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | login', async function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /login', async function(assert) {
    await visit('/login');

    assert.equal(currentURL(), '/login');
  });

  test('visiting - not logged', async function(assert) {
    await invalidateSession();
    await visit('/login');

    assert.equal(currentURL(), '/login');
  });

  test('visiting - logged in', async function(assert) {
    await invalidateSession();
    await visit('/login');

    assert.ok('[data-test-home-link]');
    assert.ok('[data-test-username-field] > input');
    assert.ok('[data-test-password-field] > input');
    assert.ok('[data-test-submit-button]');

    await fillIn('[data-test-username-field] > input', 'kumy');
    await fillIn('[data-test-password-field] > input', 'sdfsdf');
    await click('[data-test-submit-button]');
    await visit('/');

    assert.ok(currentSession().isAuthenticated);
    assert.equal(currentURL(), '/');
  });

});
