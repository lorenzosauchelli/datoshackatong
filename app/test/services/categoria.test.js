const assert = require('assert');
const app = require('../../src/app');

describe('\'categoria\' service', () => {
  it('registered the service', () => {
    const service = app.service('categoria');

    assert.ok(service, 'Registered the service');
  });
});
