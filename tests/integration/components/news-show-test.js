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

    assert.dom('[data-test-news-title]').exists();
    assert.dom('[data-test-news-content]').exists();
    assert.dom('[data-test-news-comments-count]').exists();
    assert.dom('[data-test-news-date]').exists();
    assert.dom('[data-test-news-author]').exists();

    assert.dom('[data-test-news-title]').hasText(news.title);
    assert.dom('[data-test-news-content]').hasText(news.content);
    assert.dom('[data-test-news-comments-count]').hasText("Comments ("+news.commentsCount+")");
    assert.dom('[data-test-news-author]').hasText(news.username);
  });
});
