const cookieParser = require('cookie-parser');
const session = require('express-session');
const parser = require('body-parser');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

require('./server/config/database');

app
  .use(parser.urlencoded({ extended: true }))
  .use(parser.json())
  .use(express.static(path.join(__dirname, 'dist', 'project-product-management')))
  .use(cookieParser("MyNewSecretCookieKey"))
  .use(session({
    saveUninitialized: true,
    secret: "MyNewSecretSessionKey",
    resave: false,
    name: "session",
    rolling: true,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 3600000,
    }
  }))
  .use(require('./server/routes'))
  .listen(port, () => console.log(`Express Server listening on port ${port}`));
