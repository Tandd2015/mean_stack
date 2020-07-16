const {taskController} = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', taskController.ShowAllTasks)
  .get('/:task_id', taskController.ShowOneTaskByID)
  .post('/', taskController.addNewTaskToAll)
  .put('/:task_id', taskController.updateOneTaskByID)
  .delete('/:task_id', taskController.deleteOneTaskByID)
