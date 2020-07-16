const Wolf= require('../models/wolfModel')
module.exports={
    loadIndexPage: function(request, response){
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
    },
    loadAddNewWolfPage: function(request, response){
        response.render('addWolf');
    },
    formSubmitAddWolf: function(request, response){
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
    },
    loadShowOneWolfPage: function(request, response){
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
    },
    loadEditOneWolfPage: function(request, response){
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
    },
    formSubmitEditWolf: function(request, response){
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
    },
    getDestroyOneWolf: function(request, response){
        const wolfIdPS= request.params.id;
        Wolf.remove({_id: wolfIdPS})
        .then( () =>{
            response.redirect('/')
        })
        .catch(error => {response.json(error)
        })
    },
    formSubmitDestroyOneWolf: function(request, response){
        const wolfIdP= request.params.id;
        Wolf.remove({_id: wolfIdP})
        .then( () =>{
            response.redirect('/')
        })
        .catch(error => {response.json(error)
        })
    },
}