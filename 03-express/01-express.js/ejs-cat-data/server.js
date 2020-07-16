const express= require("express");
const app = express();
app.set("view engine", "ejs");
app.set('views', __dirname+ '/views');
app.use(express.static(__dirname+ "/static"));
const allCats = [
    {name: "Pike", gender: "male", age: "3", likes: ['gazel', 'cat nip', 'SLEEP'], image: "img/cat0.jpg"},
    {name: "Alexis", gender: "female", age: "1", likes: ['cat nip', 'day bathing', 'mice'], image: "img/cat1.jpg"},
    {name: "Mercedez", gender: "female", age: "2", likes: ['Vegan', 'cat nip', 'Swimming'], image: "img/cat2.jpg"},
    {name: "Lexy", gender: "female", age: "2", likes: ['cat nip', 'monkey', 'turle soup'], image: "img/cat3.jpg"},
    {name: "Harlow", gender: "female", age: "4", likes: ['cat nip', 'cub school', 'time wtih dad'], image: "img/cat4.jpg"},
    {name: "Daniel", gender: "male", age: "33", likes: ['cat nip', 'pizza', 'software'], image: "img/cat5.jpg"},
    {name: "Christina", gender: "female", age: "34", likes: ['cat nip', 'steak', 'sleep'], image: "img/cat6.jpg"},
];
app.get('/cats', (request, response) =>{
    response.render('all-cat', {allCats: allCats});
});

app.get('/cats/:cCat_id', (request, response) => {
    const coolCat_id= request.params.cCat_id;
    const newCat = allCats[coolCat_id];
    response.render('one-cat', {newCat});
});

app.listen(8000, ()=> console.log("Daniel is Listening on port 8000!!!"));