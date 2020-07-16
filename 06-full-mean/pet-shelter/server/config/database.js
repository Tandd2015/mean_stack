const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/pets', {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('connected', () => console.log('MongoDb is now Connected...'));

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath, file)));
