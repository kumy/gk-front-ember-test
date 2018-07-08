import {module, test} from 'qunit';
import {visit, currentURL} from '@ember/test-helpers';
import {currentSession, authenticateSession, invalidateSession} from 'ember-simple-auth/test-support';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | logout', async function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /logout', async function(assert) {
    await authenticateSession({userId: 1});
    await visit('/');
    // assert.notOk('[data-test-login-button]');
    assert.ok('[data-test-logout-button]');

    // await visit('/logout');
    // assert.equal(currentURL(), '/logout');
  });

  test('visiting - not logged', async function(assert) {
    await invalidateSession();
    assert.ok('[data-test-logout-button]');
    await visit('/logout');

    assert.notOk(currentSession().isAuthenticated);
    assert.equal(currentURL(), '/');
  });

  test('visiting - logged in', async function(assert) {
    await authenticateSession({userId: 1});
    await visit('/logout');

    assert.notOk(currentSession().isAuthenticated);
    assert.equal(currentURL(), '/logout');
  });

});
