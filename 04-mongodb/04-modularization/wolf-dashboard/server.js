const session= require('express-session');
    flash= require('express-flash');
    mongoose= require('mongoose');
    bodyParser= require('body-parser');
    express= require('express');
    path= require('path');
    fs= require('fs');
    port= process.env.PORT || 8000;
    app= express();
    expireSession= 600000;

app.use(express.urlencoded({extended: true}));
app.use(flash());
app.use(session({
    secret: "finallySomeUnderstanding",
    resave: false,
    saveUninitialized: true,
    cookie: {expireSession}
}));
app.use(express.static(path.join(__dirname, 'clients/static')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'clients/views'));
require('./server/config/mongooseConfig')
require('./server/config/routesConfig')(app)
app.listen(port, ()=> console.log("Daniels here listening again"));
