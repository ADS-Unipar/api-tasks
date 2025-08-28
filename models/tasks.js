const db = require('../database');

module.exports = {
  getTasks: async function () {
    try {
      const response = new Promise((resolve, reject) => {
        db.all('SELECT * FROM tasks', (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
      });
      return await response;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  },

  addTask: async function (task) {
    try {
      const response = new Promise((resolve, reject) => {
        db.run(
          `INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)`,
          [task.title, task.description || null, task.completed ? 1 : 0],
          function (err) {
            if (err) {
              reject(err);
            }
            resolve(this.lastID);
          }
        );
      });
      return await response;
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  },
  deleteTask: async function (taskId) {
    try {
      const response = new Promise((resolve, reject) => {
        db.run(`DELETE FROM tasks WHERE id = ?`, [taskId], function (err) {
          if (err) {
            reject(err);
          }
          resolve(this.changes);
        });
      });
      return await response;
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  },

  completeTask: async function (taskId) {
    const response = new Promise((resolve, reject) => {
      db.run(
        `UPDATE tasks SET completed = 1 WHERE id = ?`,
        [taskId],
        function (err) {
          if (err) {
            reject(err);
          }
          resolve(this.changes);
        }
      );
    });
    return await response;
  },
  edit: async function (taskId, data) {
    try {
      const response = new Promise((resolve, reject) => {
        db.run(
          `UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?`,
          [
            data.title,
            data.description || null,
            data.completed ? 1 : 0,
            taskId,
          ],
          function (err) {
            if (err) {
              reject(err);
            }
            resolve(this.changes);
          }
        );
      });
      return await response;
    } catch (error) {
      console.error('Error editing task:', error);
      throw error;
    }
  },
};
