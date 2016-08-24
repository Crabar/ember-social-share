import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('share-panel', 'Integration | Component | share panel', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{share-panel}}`);
  assert.equal(this.$().text().trim(), '');
});

test('panel creates with certain buttons', function(assert) {
  assert.expect(3);
  this.render(hbs`{{share-panel buttons="vk,twitter"}}`);
  assert.ok(this.$('button.vk-share-button')['0'], 'vk button exists');
  assert.ok(this.$('button.twitter-share-button')['0'], 'twitter button exists');
  assert.notOk(this.$('button.fb-share-button')['0'], 'fb button not exists');
});

test('buttons have appropriate labels', function(assert) {
  assert.expect(3);
  this.render(hbs`{{share-panel buttons="fb,vk,twitter" labels="share fb, share vk, tweet it"}}`);
  assert.equal(this.$('button.fb-share-button span').text(), 'share fb');
  assert.equal(this.$('button.vk-share-button span').text(), 'share vk');
  assert.equal(this.$('button.twitter-share-button span').text(), 'tweet it');
});
