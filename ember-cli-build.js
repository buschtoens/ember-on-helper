'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  const app = new EmberAddon(defaults, {
    'ember-cli-babel': {
      includePolyfill: Boolean(process.env.IE)
    }
  });

  app.import({ test: 'vendor/ember/ember-template-compiler.js' });

  return app.toTree();
};
