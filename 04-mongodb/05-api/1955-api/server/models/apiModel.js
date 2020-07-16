const mongoose= require('mongoose');
    HumanSchema= mongoose.Schema({
        name: {
            type: String, 
            required: [true, "You Must Have a name to be Human and you gave None"],
            maxlength: [60, "If you name is not mispelled. Contact Us to Update your record for you. You have an in Human name but we can work with it!!!"],
            minlength: [1, "If None is not Human You still must go further than one to become one."],
            trim: true
        }
    },{timestamps: true})
module.exports= mongoose.model('Human', HumanSchema);