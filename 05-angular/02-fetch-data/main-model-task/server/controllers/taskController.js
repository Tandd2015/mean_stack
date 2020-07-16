const Task = require('mongoose').model('Task');
const { Http } = require('@status/codes');

module.exports= {
  ShowAllTasks(request, response) {
    Task.find({})
      .then(allTasks => response.json(allTasks))
      .catch(error => response.status(Http.InternalServerError).json(error));
  },
  ShowOneTaskByID(request, response) {
    const { task_id: taskId } = request.params;
    Task.findById(taskId)
      .then(oneTask => {
        if (!oneTask) {
          throw new Error(`Task with the id ${oneTask} was not found!`);
        }
        response.json(oneTask)
      })
      .catch(error => {
        response.status(Http.NotFound).json(error);
      })
  },
  addNewTaskToAll(request, response) {
    console.log('creating new',request.body); // step 1 // test //
    Task.create(request.body)
      .then(newOneTasks => response.json(newOneTasks))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  updateOneTaskByID(request, response) {
    const { task_id: taskId } = request.params;
    Task.findByIdAndUpdate(taskId, request.body, { new: true, runValidators: true })
      .then(updatedOneTasks=>{console.log(`updatedOneTasks :${updatedOneTasks}`)
        response.json(updatedOneTasks);
      })
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        response.status(Http.UnprocessableEntity).json(errors);
      })
  },
  deleteOneTaskByID(request, response) {
    const { task_id: taskId } = request.params;
    Task.findByIdAndRemove(taskId)
      .then(removedOneTasks => {console.log(`removedOneTasks :${removedOneTasks}`)
        response.json(removedOneTasks);
      })
      .catch(error => response.status(Http.Conflict).json(error));
  },
};
