import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('linkedin-share-button', 'Integration | Component | linkedin share button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{linkedin-share-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#linkedin-share-button}}
      template block text
    {{/linkedin-share-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
