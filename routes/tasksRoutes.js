const { Router } = require("express");
const tasksController = require("../controllers/tasksController")
const route = Router()

route.patch('/:id/complete', tasksController.complete)
route.post('/', tasksController.create)
route.get('/', tasksController.list)
route.delete('/:id', tasksController.delete)
route.put('/:id', tasksController.edit)

module.exports = route