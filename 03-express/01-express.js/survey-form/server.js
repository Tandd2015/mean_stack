const session= require('express-session');
const bodyParser = require('body-parser');
const express= require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();
// const expireDate = new Date(Date.now() + 60 * 60 * 1000);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/static'));
app.use(session({
    secret: "NinjaSlicing",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000000}
}));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.render('index');
});

app.post('/result', (req, res)=>{
    resultInfo= req.body;
    res.render('results', {resultInfo: resultInfo})
});

app.listen(8000, ()=> console.log('Daniel is Always Listening on port 8000!!!'))