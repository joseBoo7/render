const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Ruta para mostrar un mensaje estático
app.get('/', (req, res) => {
  res.send('¡Hola! Este es un mensaje desde tu aplicación Node.js en Render.');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
