import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import {startMirage} from 'geokrety-front/initializers/ember-cli-mirage';

module('Integration | Component | news comment show', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function() {
    this.server = startMirage();
  });
  hooks.afterEach(function() {
    this.server.shutdown();
  });

  test('it renders', async function(assert) {
    let comment = server.create('newsComment');
    this.set('comment', comment);

    await render(hbs `{{news-comment-show comment=comment}}`);

    assert.equal(this.element.querySelector('[data-test-news-comment-author]').textContent.trim(), comment.author.name);
    assert.equal(this.element.querySelector('[data-test-news-comment-content]').textContent.trim(), comment.comment);
  });
});
