import {
	test
} from 'qunit';
import moduleForAcceptance from 'geokrety-front/tests/helpers/module-for-acceptance';
import {
	authenticateSession,
	invalidateSession
} from 'geokrety-front/tests/helpers/ember-simple-auth';
import {visit, currentURL, andThen} from '@ember/test-helpers';

moduleForAcceptance('Acceptance | logout', {
	needs: ['service:session']
});

test('visiting /logout', function(assert) {
	visit('/logout');

	andThen(function() {
		assert.equal(currentURL(), '/');
	});
});

test('visiting - not logged', function(assert) {
	invalidateSession(this.application);
	visit('/logout');

	andThen(function() {
		assert.equal(currentURL(), '/');
	});
});

test('visiting - logged in', function(assert) {
	authenticateSession(this.application);
	visit('/logout');

	andThen(function() {
		assert.equal(currentURL(), '/logout');
	});
});
