const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const databaseURL = 'mongodb://localhost/TaskSchema';
const modelsPath = path.join(__dirname, '../models');

mongoose.connect(databaseURL, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('connected', () => console.log("Successful attempt to connect to mongodb"));

fs.readdirSync(modelsPath)
  .filter(model=> model.endsWith('.js'))
  .forEach(model=> require(path.join(modelsPath, model)));
