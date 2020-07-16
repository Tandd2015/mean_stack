const cookieParser= require('cookie-parser');
const session= require('express-session');
const bodyParser= require('body-parser');
const express= require('express');
const path= require('path')

const serverPort= process.env.PORT || 8000;
const app= express()

require('./server/config/taskMongooseConfig');

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, 'dist', 'main-model-task')))
  .use(cookieParser("cookieSecret"))
  .use(session({
    saveUninitialized: true,
    secret: "sessionSecret",
    resave: false,
    name: 'session',
    rolling: true,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 369963
    }
  }))
  .use(require('./server/routes/'))
  .listen(serverPort, ()=> console.log(`Express sever port is listening on port ${serverPort}`));

