const Task = require('mongoose').model('Task');
const Http = require('@status/codes');

module.exports = {
  index(_request, response) {
    Task.find({})
      .then(taskz => response.json(taskz))
      .catch(error => response.status(Http.InternalServerError).json(error))
  },
  create(request, response) {
    Task.create(request.body)
      .then(taskx => response.json(taskx))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  show(request, response) {
    const { taskx_id: taskxId } = request.params;
    Task.findById(taskxId)
      .then(taskx => {
        if(!taskx) {
          throw new Error(`Task with id ${taskxId} not found!`);
        }
        response.json(taskx);
      })
      .catch(error => {
        response.status(Http.NotFound).json(error);
      });
  },
  update(request, response) {
    const { taskx_id: taskxId } = request.params;
    Task.findByIdAndUpdate(taskxId, request.body, { new: true, runValidators: true })
      .then(taskx => response.json(taskx))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  destroy(request, response) {
    const { taskx_id: taskxId } = request.params;
    Task.findOneAndRemove(taskxId)
      .then(taskx => response.json(taskx))
      .catch(error => response.status(Http.Conflict).json(error));
  },
}
