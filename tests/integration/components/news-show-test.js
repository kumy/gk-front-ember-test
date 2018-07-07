import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | news show', function(hooks) {
  setupRenderingTest(hooks);

  const News = EmberObject.extend({
    id: 4,
    title: "A title",
    content: "A news content",
    username: "GK Team",
    commentsCount: "3",
    createdOnDateTime: "2018-04-17T20:30:02",
    lastCommentDateTime: "2018-04-18T08:12:55"
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    let news = News.create();
    this.set('news', news);

    await render(hbs `{{news-show news=news}}`);

    assert.equal(this.element.querySelector('h3.panel-title').textContent.trim(), 'A title');
    assert.equal(this.element.querySelector('div.panel-body').textContent.trim(), 'A news content');
    assert.equal(this.element.querySelector('span.news-comments-count').textContent.trim(), 'Comments (3)');
    assert.equal(this.element.querySelector('span.news-date').textContent.trim(), 'April 17, 2018');
    assert.equal(this.element.querySelector('span.news-author').textContent.trim(), 'GK Team');
  });
});
