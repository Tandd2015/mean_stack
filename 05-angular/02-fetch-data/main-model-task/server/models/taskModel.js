const mongoose= require('mongoose');

console.log('Loading my task model.');

const {Schema}= mongoose;

const TaskSchema= new Schema({
        taskTitle: {
          type: String,
          required: [true, "You must have a task value in taskTitle field"],
          trim: true,
        },
        taskDescription: {
          type: String,
          required: [true, "You must have a task value in taskDescription field"],
          trim: true,
        },
    }, {
      timestamps: true,
    });

module.exports= mongoose.model('Task', TaskSchema);
