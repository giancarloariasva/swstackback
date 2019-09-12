const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;
//un ternario puede comprobar la existencia de la base de datos
//abajo está el contenido del archivo .env ubicado en el directorio raiz (backend):
//MONGODB_URI=mongodb://localhost/swstack

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('DB is connected');
})