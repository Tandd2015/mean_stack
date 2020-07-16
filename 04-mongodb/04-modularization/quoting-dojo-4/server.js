const express= require('express');
    bodyParser= require('body-parser');
    mongoose= require('mongoose');
    path = require('path');
    fs= require('fs');
    port = process.env.PORT || 8000;
    app= express();


app.use(express.urlencoded({extended: true}));
const session= require('express-session');
    flash= require('express-flash');
app.use(flash());
app.use(session({
    secret: "newShot",
    resave: false,
    saveUninitialized: true,
    cookie: {expireTime: 600000},
}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname ,'views'));

require('./server/config/mongoose.config.js')
require('./server/config/routes.config.js')(app)
app.listen(port, ()=> console.log("Daniels Back!!!"))