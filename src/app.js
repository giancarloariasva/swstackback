const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', 5500);
//en el ejm se usa un || en ek caso que tuvieramos un port externo

//midlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/contestants', require('./routes/contestants'))

module.exports = app;