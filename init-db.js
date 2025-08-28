const db = require('./database');
function initDB() {
  return db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    completed BOOLEAN NOT NULL CHECK (completed IN (0, 1)) DEFAULT 0
  )`);
    console.log('Tabela "tasks" criada ou já existente.');
  });
}

module.exports = initDB;
