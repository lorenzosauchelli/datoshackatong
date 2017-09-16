// Initializes the `categoria` service on path `/categoria`
const createService = require('feathers-mongodb');
const hooks = require('./categoria.hooks');
const filters = require('./categoria.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/categoria', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('categoria');

  mongoClient.then(db => {
    service.Model = db.collection('categoria');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
