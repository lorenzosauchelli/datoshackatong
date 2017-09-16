const datos = require('./datos/datos.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(datos);
};
