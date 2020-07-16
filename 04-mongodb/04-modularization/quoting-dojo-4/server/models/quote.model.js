const mongoose= require('mongoose')
const quotesSchema= new mongoose.Schema({
    name: {type: String, require: true, minlength: 1},
    quote: {type: String, require: true, minlength: 1},
},{timestamps: true});
module.exports= mongoose.model('Quote', quotesSchema);