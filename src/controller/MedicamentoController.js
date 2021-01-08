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
  },                                                                                                 

  async findByComp(req, res){
    const { COMPOSICAO, NOME } = req.query;
    const tipo = COMPOSICAO != null ? 'COMPOSICAO' : 'NOME';
    var response = ''; 
      if(tipo == 'COMPOSICAO'){
          response = await MedicamentoModel.find({'COMPOSICAO':  {$regex: COMPOSICAO , $options: 'i'} });
      }else{      
           response = await MedicamentoModel.find({'NOME':  {$regex: NOME , $options: 'i'} });
      }

    return res.json(response);
  }

  
}

