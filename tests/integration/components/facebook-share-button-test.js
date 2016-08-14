import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('facebook-share-button', 'Integration | Component | facebook share button', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{facebook-share-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#facebook-share-button}}
      template block text
    {{/facebook-share-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
