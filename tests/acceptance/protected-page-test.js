import {
	test
} from 'qunit';
import moduleForAcceptance from 'geokrety-front/tests/helpers/module-for-acceptance';
import {
	authenticateSession,
	invalidateSession
} from 'geokrety-front/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | protected page');

test('visiting authenticated only - not logged', function(assert) {
	invalidateSession(this.application);
	visit('/contact');

	andThen(function() {
		assert.notEqual(currentURL(), '/contact');
		assert.equal(currentURL(), '/login');
	});
});

test('visiting authenticated only - logged in', function(assert) {
	// let application = startApp();
	authenticateSession(this.application);
	visit('/contact');
	andThen(function() {
		assert.equal(currentURL(), '/contact');
	});
});

test('visiting unauthenticated only - not logged', function(assert) {
	visit('/about');

	andThen(function() {
		assert.equal(currentURL(), '/about');
	});
});

test('visiting unauthenticated only - logged in', function(assert) {
	visit('/login');
	fillIn('[data-test-username-field]', 'kumy');
	fillIn('[data-test-password-field]', 'sdfsdf');
	click('[data-test-submit-button]');

	andThen(function() {
		click('[data-test-home-link]');
		andThen(function() {
			assert.equal(currentURL(), '/');
			click('[data-test-about-link]');
		});
	});
});
