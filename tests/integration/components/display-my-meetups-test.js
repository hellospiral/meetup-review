import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('display-my-meetups', 'Integration | Component | display my meetups', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{display-my-meetups}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#display-my-meetups}}
      template block text
    {{/display-my-meetups}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
