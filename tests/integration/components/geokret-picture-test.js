import {
	moduleForComponent,
	test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('geokret-picture', 'Integration | Component | geokret picture', {
	integration: true
});

const Picture = Ember.Object.extend({
	id: 4,
	type: 0,
	itemId: 12,
	geokretId: 0,
	ownerId: 1,
	filename: "1196418426b7cyc.jpg",
	pictureUrl: "https://geokrety.org/obrazki/1196418426b7cyc.jpg",
	thumbnailUrl: "https://geokrety.org/obrazki-male/1196418426b7cyc.jpg",
	description: "An example",
	timestamp: "2007-11-30 10:27:07"
});

test('Description shown', function(assert) {

	// Set any properties with this.set('myProperty', 'value');
	// Handle any actions with this.on('myAction', function(val) { ... });

	this.render(hbs `{{geokret-picture}}`);
	assert.equal(this.$().text().trim(), '');

	let picture = Picture.create();
	this.set('picture', picture);
	this.render(hbs `{{geokret-picture picture=picture}}`);
	assert.equal(this.$().text().trim(), picture.get('description'));

	// Template block usage:
	this.render(hbs `
    {{#geokret-picture}}
      template block text
    {{/geokret-picture}}
  `);
	assert.equal(this.$().text().trim(), 'template block text');

	// this.set('picture', picture);
	this.render(hbs `
    {{#geokret-picture picture=picture}}
      template block text
    {{/geokret-picture}}
  `);
	assert.equal(this.$().text().trim(), 'template block text');
});

test('Image has url', function(assert) {
	this.render(hbs `{{geokret-picture}}`);
	assert.equal(this.$('img').attr('src'), undefined);

	let picture = Picture.create();
	this.set('picture', picture);
	this.render(hbs `{{geokret-picture picture=picture}}`);
	assert.equal(this.$('img').attr('src'), picture.get('thumbnailUrl'));
});
