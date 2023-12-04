const mongoose = require('mongoose');

const URI= process.env.MONGODB_URI;
// Configura y establece la conexión con Mongoose
mongoose.connect(URI, {
});

// Manejo de eventos de conexión
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error de conexión a MongoDB:', error);
});

db.once('open', () => {
  console.log('Conexión a MongoDB establecida con éxito.');
});


