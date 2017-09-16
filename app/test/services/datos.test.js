const assert = require('assert');
const app = require('../../src/app');

describe('\'datos\' service', () => {
  it('registered the service', () => {
    const service = app.service('datos');

    assert.ok(service, 'Registered the service');
  });
});
