const mongoose = require('mongoose');

const MedicamentoSchema = new mongoose.Schema({
  ID_PRODUTO: {
    type: Number,
    required: true,
  },
  EAN: {
    type: Number,
    required: true,
  },
  REGISTRO_ANVISA: {
    type: Number,
    required: true,
  },
  GGREM: {
    type: Number,
    required: true,
  },
  NOME: {
    type: String,
    required: true,
  },
  DESCRICAO: {
    type: String,
    required: true,
  },
  COMPOSICAO: {
    type: String,
    required: false,
  },
  QTD_EMBALAGEM: {
    type: Number,
    required: false,
  },
  PF_20: {
    type: Number,
    required: false,
  },
  PMC_20: {
    type: Number,
    required: false,
  },
  PF_18:  {
    type: Number,
    required: false,
  },
  PMC_18: {
    type: Number,
    required: false,
  },
  PF_17:  {
    type: Number,
    required: false,
  },
  PMC_17:  {
    type: Number,
    required: false,
  },
  PF_17_5:  {
    type: Number,
    required: false,
  },
  PMC_17_5:  {
    type: Number,
    required: false,
  },
  PF_12:  {
    type: Number,
    required: false,
  },
  PMC_12:  {
    type: Number,
    required: false,
  },
  PF_0: {
    type: Number,
    required: false,
  },
  PMC_0:  {
    type: Number,
    required: false,
  },
  PERCENTUAL_IPI: {
    type: Number,
    required: false,
  },
  DATA_VIGENCIA:  {
    type: Date,
    required: false,
  },
  NOVO: {
    type: Boolean,
    required: false,
  },
  VARIACAO_PRECO:  {
    type: String,
    required: false,
  },
  PF_17_ALC:  {
    type: Number,
    required: false,
  },
  PMC_17_ALC:  {
    type: Number,
    required: false,
  },
  PF_17_5_ALC:  {
    type: Number,
    required: false,
  },
  PMC_17_5_ALC: {
    type: Number,
    required: false,
  },
  PF_18_ALC:  {
    type: Number,
    required: false,
  },
  PMC_18_ALC:  {
    type: Number,
    required: false,
  },
  NCM:  {
    type: Number,
    required: false,
  },
  ID_TARJA:  {
    type: String,
    required: false,
  },
  CLASSE_TERAPEUTICA:  {
    type: String,
    required: false,
  },
  PORTARIA_344_98:  {
    type: String,
    required: false,
  },
  PRODUTO_REFERENCIA:  {
    type: String,
    required: false,
  },
  CAS: {
    type: String,
    required: false,
  },
  DCB: {
    type: String,
    required: false,
  },
  ATC_CODE: {
    type: String,
    required: false,
  },
  CAP: {
    type: Boolean,
    required: false,
  },
  CONFAZ_87: {
    type: Boolean,
    required: false,
  },
  TISS_TUSS: {
    type: String,
    required: false,
  },
  CEST: {
    type: String,
    required: false,
  },
  ID_FABRICANTE: {
    type: Number,
    required: false,
  },
  NOME_FABRICANTE: {
    type: String,
    required: false,
  },
  ID_LCCT: {
    type: String,
    required: false,
  },
  DESCRICAO_LISTA: {
    type: String,
    required: false,
  },
  ID_REGIME_PRECO: {
    type: String,
    required: false,
  },
  DESCRICAO_REGIME_PRECO: {
    type: String,
    required: false,
  },
  ID_TIPO_PRODUTO: {
    type: String,
    required: false,
  },
  DESCRICAO_TIPO_PRODUTO: {
    type: String,
    required: false,
  }

})

mongoose.model('Medicamento', MedicamentoSchema);