import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gplus-share-button', 'Integration | Component | gplus share button', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gplus-share-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gplus-share-button}}
      template block text
    {{/gplus-share-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
