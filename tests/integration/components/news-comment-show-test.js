import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
// import { startMirage } from 'geokrety-front/initializers/ember-cli-mirage';

module('Integration | Component | news comment show', function(hooks) {
  setupRenderingTest(hooks);
  // beforeEach() {
  //   this.server = startMirage();
  // };
  // afterEach() {
  //   this.server.shutdown();
  // };

  const NewsComment = EmberObject.extend({
    id: 5,
    newsId: "181",
    userId: "26422",
    comment: "Congrats",
    icon: "1",
    "createdOnDateTime": "2018-04-17T20:30:02"
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    let comment = NewsComment.create();
    this.set('comment', comment);

    await render(hbs `{{news-comment-show comment=comment}}`);

    assert.equal(this.element.querySelector('[data-test-news-comment-author]').textContent.trim(), 'Anonymous');
    assert.equal(this.element.querySelector('[data-test-news-comment-content]').textContent.trim(), 'Congrats');
    assert.equal(this.element.querySelector('[data-test-news-comment-creation-date-time]').textContent.trim(), 'April 17, 2018');
  });
});
