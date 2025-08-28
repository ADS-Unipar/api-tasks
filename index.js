const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const tasksRoutes = require('./routes/tasksRoutes');
const initDB = require('./init-db');

initDB();

// Rota padrão
app.get('/', (req, res) => {
  res.send({ nome: 'João', idade: 30 });
});

app.use('/tasks', tasksRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
