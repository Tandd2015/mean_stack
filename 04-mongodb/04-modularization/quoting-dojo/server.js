const express= require('express');
    bodyParser= require('body-parser');
    mongoose= require('mongoose');
    path = require('path');
    port = process.env.PORT || 8000;
    app= express();


app.use(express.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/quotesSchema', {useNewUrlParser: true, useUnifiedTopology: true});
const quotesSchema= new mongoose.Schema({
    name: {type: String, require: true, minlength: 1},
    quote: {type: String, require: true, minlength: 1},
},{timestamps: true});
const Quote= mongoose.model('Quote', quotesSchema);

const session= require('express-session');
const flash= require('express-flash');
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
require('./server/config/routes.config.js')
app.listen(port, ()=> console.log("Daniels Back!!!"))