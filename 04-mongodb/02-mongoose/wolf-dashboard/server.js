const session= require('express-session');
    flash= require('express-flash');
    bodyParser= require('body-parser');
    express= require('express');
    path= require('path');
    mongoose= require('mongoose');
    port= process.env.PORT || 8000;
    app= express();
    expireSession= 600000;
    mongoose.Promise = global.Promise;

app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/wolfSchema', {useNewUrlParser: true, useUnifiedTopology: true});
const wolfSchema = new mongoose.Schema({
    name: {type: String, require: true, minlength: 1},
    pack_postion: {type: String, require: true, minlength: 1},
    strengths: [{type: String, require: true, minlength: 1}],
    weaknesses: [{type: String, require: true, minlength: 1}]
}, {timestamps: true});
const Wolf= mongoose.model('Wolf', wolfSchema);

app.use(flash());
app.use(session({
    secret: "finallySomeUnderstanding",
    resave: false,
    saveUninitialized: true,
    cookie: {expireSession}
}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response)=>{
    Wolf.find({}).sort({createdAt: 'asc'})
    .then(wolf =>{console.log('Add Wolves Get Route Success^^^^^^^^^^^^^^^^^^^^^^^^', wolf)
        response.render('allWolves', {allWolves: wolf});
    })
    .catch(error =>{console.log('All Wolves Get Route Errors ########################', error)
        for(let index in error.errors){
            request.flash('allWolvesError', error.errors[index].message)
        }
        response.redirect('/wolfs/new')
    })
});

app.get('/wolfs/new', (request, response)=>{
    response.render('addWolf');
});

app.post('/wolf', (request, response)=>{
    const wolf= new Wolf();
    wolf.name= request.body.wolfAddNameInput;
    wolf.pack_postion= request.body.wolfAddPackPostion;
    wolf.strengths= request.body.wolfAddstrengthsInput;
    wolf.weaknesses= request.body.wolfAddweaknessesInput;
    wolf.save()
    .then(wolf =>{console.log('Add Wolf Post Route ***********************************************', wolf)
        response.redirect('/')
    })
    .catch(error => {console.log('Add Wolf Post Route Errors ////////////////////////', error)
        for(let index in error.errors){
            request.flash('addWolfError', error.errors[index].message)
        }
        response.redirect('/wolfs/new')
    })
});

app.get('/wolfs/:id', (request, response)=>{
    const wolfId= request.params.id;
    Wolf.findOne({_id: wolfId})
    .then(wolf =>{console.log('One Wolf Select Get Route Success $$$$$$$$$$$$$$$$$$$$$$$$', wolf)
        response.render('oneWolf', {wolf: wolf})
    })
    .catch(error => {console.log('One Wolf Select Route Errors ()()()()()()()()()()()()()()()()()()()()()()()()', error)
        for(let index in error.errors){
            request.flash('oneWolfError', error.errors[index].message)
        }
    })
});

app.get('/wolfs/edit/:id', (request, response)=>{
    const wolfId= request.params.id;
    console.log(request.params.id, wolfId)
    Wolf.findOne({_id: wolfId})
    .then(wolf =>{console.log('Edit Wolf Get Route Success @@@@@@@@@@@@@@@@@@@@@@@@', wolf)
        response.render('editWolf', {wolf: wolf})
    })
    .catch(error => {console.log('Edit Wolf Route Errors ()()()()()()()()()()()()()()()()()()()()()()()()', error)
        for(let index in error.errors){
            request.flash('editWolfError', error.errors[index].message)
        }
        response.redirect('/wolfs/edit/:id')
    })
}); 

app.post('/wolfs/:id', (request, response)=>{
    const wolfIdP= request.params.id;
    Wolf.findOne({_id: wolfIdP})
    .then(wolf =>{console.log('Edit Form Wolf POST Route Success ????????????????????????', wolf)
        wolf.name= request.body.wolfEditNameInput;
        wolf.pack_postion= request.body.wolfEditPackPostion;
        wolf.strengths= request.body.wolfEditstrengthsInput;
        wolf.weaknesses= request.body.wolfEditweaknessesInput;
        wolf.save()
        response.redirect('/')
    })
    .catch(error => {console.log('Edit Form Wolf POST Route Errors ()()()()()()()()()()()()()()()()()()()()()()()()', error)
        for(let index in error.errors){
            request.flash('editFormWolfError', error.errors[index].message)
        }
        response.redirect('/wolfs/:id')
    })
})

app.get('/wolfs/destroy/:id', (request, response)=>{
    const wolfIdPS= request.params.id;
    Wolf.remove({_id: wolfIdPS})
    .then( () =>{
        response.redirect('/')
    })
    .catch(error => {response.json(error)
    })
});

app.post('/wolfs/destroy/:id', (request, response)=>{
    const wolfIdP= request.params.id;
    Wolf.remove({_id: wolfIdP})
    .then( () =>{
        response.redirect('/')
    })
    .catch(error => {response.json(error)
    })
});

app.listen(port, ()=> console.log("Daniels here listening again"));

{/* <form action="/wolfs/destroy/<%=wolf._id %>" method="post"><input type="submit" value="Delete"></form>
app.post('/wolfs/destroy/:id', (request, response)=>{
    const wolfIdP= request.params.id;
    Wolf.remove({_id: wolfIdP})
    .then( () =>{
        response.redirect('/')
    })
    .catch(error => {response.json(error)
    })
}); */}