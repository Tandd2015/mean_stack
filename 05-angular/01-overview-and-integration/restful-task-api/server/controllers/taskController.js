const Task= require('../models/taskModel');
module.exports= {
    ShowAllTasks: function(request, response){
        Task.find({})
            .then(allTasks=>{console.log(`allTasks :${allTasks}`)
                response.json(allTasks);})
            .catch(error=>{console.log(`error :${error}`)
                response.json(error);});
    },
    ShowOneTaskByID: function(request, response){
        Task.findById(request.params.id)
            .then(oneTasks=>{console.log(`oneTasks :${oneTasks}`)
                response.json(oneTasks);})
            .catch(error=>{console.log(`error :${error}`)
                response.json(error);});
    },
    addNewTaskToAll: function(request, response){
        Task.create(request.body)
            .then(newOneTasks=>{console.log(`newOneTasks :${newOneTasks}`)
                response.json(newOneTasks);})
            .catch(error=>{console.log(`error :${error}`)
                response.json(error);});
    },
    updateOneTaskByID: function(request, response){
        Task.findByIdAndUpdate(request.params.id, request.body, {new: true})
        .then(updatedOneTasks=>{console.log(`updatedOneTasks :${updatedOneTasks}`)
            response.json(updatedOneTasks);})
        .catch(error=>{console.log(`error :${error}`)
            response.json(error);});
    },
    deleteOneTaskByID: function(request, response){
        Task.findByIdAndRemove(request.params.id)
            .then(removedOneTasks=>{console.log(`removedOneTasks :${removedOneTasks}`)
                response.json(removedOneTasks);})
            .catch(error=>{console.log(`error :${error}`)
                response.json(error);});
    },
}