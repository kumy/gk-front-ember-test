import {
	test
} from 'qunit';
import moduleForAcceptance from 'geokrety-front/tests/helpers/module-for-acceptance';
import {
	authenticateSession,
	invalidateSession
} from 'geokrety-front/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
	visit('/login');

	andThen(function() {
		assert.equal(currentURL(), '/login');
	});
});

test('visiting - not logged', function(assert) {
	invalidateSession(this.application);
	visit('/login');

	andThen(function() {
		assert.equal(currentURL(), '/login');
	});
});

test('visiting - logged in', function(assert) {
	// let application = startApp();
	authenticateSession(this.application);
	visit('/login');
	andThen(function() {
		assert.equal(currentURL(), '/');
	});
});

// test('User authentication', function(assert) {
// 	visit('/login');
// 	fillIn('[data-test-username-field]', 'kumy');
// 	fillIn('[data-test-password-field]', 'sdfsdf');
// 	click('[data-test-submit-button]');
//
// 	andThen(function() {
// 		assert.equal(currentURL(), '/login');
// 	});
// });
//
// test('User authentication return to original page', function(assert) {
// 	visit('/about');
// 	click('[data-test-login-button]');
// 	andThen(function() {
// 		assert.equal(currentURL(), '/login');
// 		fillIn('[data-test-username-field]', 'kumy');
// 		fillIn('[data-test-password-field]', 'sdfsdf');
// 		click('[data-test-submit-button]');
// 		andThen(function() {
// 			assert.equal(currentURL(), '/');
// 		});
// 	});
// });
