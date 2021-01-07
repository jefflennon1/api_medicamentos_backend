const express = require('express');
const routes = express.Router();
const MedicamentoModel = require('./controller/MedicamentoController');

routes.get('/medicamentos/all', MedicamentoModel.index);
routes.post('/medicamentos', MedicamentoModel.create);



module.exports = routes;