const mongoose= require('mongoose')
    path= require('path');
    fs= require('fs');
    databaseURL= 'mongodb://localhost/HumanSchema';
mongoose.connect(databaseURL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
var modelsPath= path.join(__dirname, '../models');

module.exports= function(app){
    fs.readdirSync(modelsPath)
        .filter(model=> model.endsWith('.js'))
        .forEach(model=> require(path.join(modelsPath, model)))
};
mongoose.connection.once('connected', ()=> console.log("Successful attempt to connect to mongodb"));
