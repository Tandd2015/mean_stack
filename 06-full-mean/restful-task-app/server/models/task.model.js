const mongoose = require('mongoose');
const { Schema } = mongoose;
console.log('Task Model is loading');
const TaskSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Task title is a required field'],
    minlength: [1, 'Task title is required to be longer than 1 characters'],
    maxlength: [257, 'Task title is required to be shorter than 257 characters'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Task description is a required field'],
    minlength: [1, 'Task description is required to be longer than 1 characters'],
    trim: true
  },
  completed: {
    type: Number,
    trim: true,
    default: 0
  },
  noteOne: {
    type: String,
    trim: true,
    default: ""
  },
  noteTwo: {
    type: String,
    trim: true,
    default: ""
  },
  noteThree: {
    type: String,
    trim: true,
    default: ""
  },
}, {
  timestamps: true
});

function arrayLength(value) {
  return value.length <= 3;
};

module.exports = mongoose.model('Task', TaskSchema);
