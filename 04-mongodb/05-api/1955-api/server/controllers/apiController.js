const Human= require('../models/apiModel')
module.exports= {
    indexPageLoad: function(request, response){
        Human.find({})
            .then(allHumans=>{console.log('allHumanThen', allHumans)
                response.json(allHumans);
            })
            .catch(error=>{console.log('allHumanCatch', error)
                response.json(error);
            })
    },
    addHumanToDBGet: function(request, response){
        const humanName= request.params.name;
        Human.create({name: humanName})
            .then(thisHuman=>{console.log('thisHumanThen', thisHuman)
                response.redirect('/');
            })
            .catch(error=>{console.log('thisHumanCatch', error)
                response.json(error);
            })
    },
    destroyHumanGet: function(request, response){
        const humanName= request.params.name;
        Human.findOneAndRemove({name: humanName})
            .then(thisHuman=>{console.log('thisHumanThenSecond', thisHuman)
                response.redirect('/');
            })
            .catch(error=>{console.log('thisHumanCatchSecond', error)
                response.json(error);
            })
    },
    showOneHuman: function(request, response){
        const humanName= request.params.name;
        console.log(humanName)
        Human.findOne({name: humanName})
            .then(thisHuman=>{console.log('thisHumanThenThird', thisHuman)
                response.json(thisHuman);
            })
            .catch(error=>{console.log('thisHumanCatchThird', error)
                response.json(error);
            })
    },
};
