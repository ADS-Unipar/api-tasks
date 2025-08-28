const API = require("../api.js");

module.exports = {
  getTasks: async function () {
    try {
      const response = await API.get("/tasks");
      return response.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  },

  addTask: async function (task) {
    try {
      const response = await API.post("/tasks", task);
      return response.data;
    } catch (error) {
      console.error("Error adding task:", error);
      throw error;
    }
  },

  deleteTask: async function (taskId) {
    try {
      const response = await API.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error;
    }
  },
  completeTask: async function (taskId) {
    const response = await API.patch(
      `/tasks/${taskId}`,
      { completed: true }
    );
    return response.data
  },
  edit: async function (taskId, data) {
    const task = (await API.get(`/tasks/${taskId}`)).data
    const response = await API.put(
      `/tasks/${taskId}`,
      { ...task, ...data }
    );
    return response.data
  }

};