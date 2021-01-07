const mongoose = require('mongoose');
const MedicamentoModel = mongoose.model('Medicamento');

module.exports = {
  async index(req, res){
      const medicamentos = await MedicamentoModel.find();
      return res.json(medicamentos);
  },
  async create(req, res){
    const medicamento = await MedicamentoModel.create(req.body);
    return res.json(medicamento)
  }
}