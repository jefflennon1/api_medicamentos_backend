const express = require('express');
const cors = require('cors');
const requiredir = require('require-dir');
const mongoose = require('mongoose');

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o db
mongoose.connect('mongodb://localhost:27017/api_medicamentos',
   { useUnifiedTopology: true, useNewUrlParser: true }
 );

requiredir('./src/model')

app.use('/api_medicamentos', require('./src/routes'));

app.listen(5555, ()=>{
  console.log('Backend Started! 😁');
});