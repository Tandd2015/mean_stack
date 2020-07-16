const session= require('express-session');
const bodyParser= require('body-parser');
const express= require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();
const expireTime = new Date(Date.now() + 60 * 60 * 1000);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname+"/static"))
app.use(session({
    secret: "NinjaSlice",
    resave: false,
    saveUninintialized: true,
    cookie: {maxAge: expireDate}
}));

app.get('/', (req, res) =>{
    if(!('counter' in req.session)){
        req.session.counter= 0;
    }
    req.session.counter+=1;
    const counter= req.session.counter
    res.render('index', {counter: counter})
});

app.get('/count2', (req, res) =>{
    req.session.counter+=1;
    res.redirect('/');
});

app.get('/resetTer', (req, res) =>{
    req.session.destroy();
    res.redirect('/');
});

app.post('/count1', (req, res) => {
    res.redirect('/');
});
app.listen(8000, ()=> console.log("Daniel is Listening on port 8000!!!"))