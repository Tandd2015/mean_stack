const mongoose= require('mongoose')
const path= require('path');
const fs= require('fs');
mongoose.connect('mongodb://localhost/quotesSchema', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
var modelsPath= path.join(__dirname, '../models');

module.exports= function(app){
    fs.readdirSync(modelsPath)
        .filter(model=> model.endsWith('.js'))
        .forEach(model=> require(path.join(modelsPath, model)))
};


mongoose.connection.once('connected', ()=> console.log("Successful attempt to connect to mongodb"));