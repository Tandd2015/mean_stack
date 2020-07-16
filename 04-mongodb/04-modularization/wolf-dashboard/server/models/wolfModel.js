const mongoose= require('mongoose')
const wolfSchema = new mongoose.Schema({
    name: {type: String, require: true, minlength: 1},
    pack_postion: {type: String, require: true, minlength: 1},
    strengths: [{type: String, require: true, minlength: 1}],
    weaknesses: [{type: String, require: true, minlength: 1}]
}, {timestamps: true});
module.exports= mongoose.model('Wolf', wolfSchema);
