const mongoose= require('mongoose');
    TaskSchema= mongoose.Schema({
        taskTitle:{type: String, required: [true, "You Must Have a Value with(In*2)put title field and you gave None"], trim: true},
        taskDescription:{type: String, required: true, trim: true},
        taskIfCompleted:{type: Boolean, default: false}
    },{timestamps: true});
module.exports= mongoose.model('Task', TaskSchema);
