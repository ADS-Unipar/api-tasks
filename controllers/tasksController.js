const model = require("../models/tasks")

module.exports = {
  create: async (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const task = await model.addTask({
      title, description, completed: false
    })
    res.send(task)
  },
  list: async (req, res) => {
    const tasks = await model.getTasks()
    res.send(tasks)
  },
  delete: async (req, res) => {
    const id = req.params.id
    const task = await model.deleteTask(id)
    res.send(task)
  },
  complete: async (req, res) => {
    const id = req.params.id
    const task = await model.completeTask(id)
    res.send(task)
  },
  edit: async (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const description = req.body.description
    const task = await model.edit(id ,{ title, description})
    res.send(task)
  },

}