const taskController= require('../controllers/taskController')
module.exports= function(app){
    app.get('/routeTasks', taskController.ShowAllTasks),
    app.get('/routeTasks/:taskID', taskController.ShowOneTaskByID),
    app.post('/routeTasks', taskController.addNewTaskToAll),
    app.put('/routeTasks/:taskID', taskController.updateOneTaskByID),
    app.delete('/routeTasks/:taskID', taskController.deleteOneTaskByID)
};