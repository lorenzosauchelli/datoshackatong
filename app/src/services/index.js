const datos = require('./datos/datos.service.js');
const categoria = require('./categoria/categoria.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(datos);
  app.configure(categoria);
};
