const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3000;

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors());
// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

const appEncryptor = require('./router/encryptor.routes');
app.use("/encrypt", appEncryptor);
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});