import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, resetOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | on-document', function(hooks) {
  setupRenderingTest(hooks);
  hooks.afterEach(() => resetOnerror());

  test('it basically works', async function(assert) {
    assert.expect(6);

    this.someMethod = function(event) {
      assert.ok(this instanceof HTMLDocument, 'this context is the document');
      assert.ok(
        event instanceof MouseEvent,
        'first argument is a `MouseEvent`'
      );
      assert.strictEqual(
        event.target.tagName,
        'BUTTON',
        'correct element tagName'
      );
      assert.dom(event.target).hasAttribute('data-foo', 'test-element');
    };

    await render(hbs`
      {{on-document "click" this.someMethod}}
      <button type="button" data-foo="test-element"></button>
    `);

    assert.counts({ adds: 1, removes: 0 });

    await click('button');

    assert.counts({ adds: 1, removes: 0 });
  });
});
