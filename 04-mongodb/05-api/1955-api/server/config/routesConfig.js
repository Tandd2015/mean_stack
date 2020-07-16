const apiController= require('../controllers/apiController');
module.exports= function(app){
    app.get('/names/', apiController.indexPageLoad);
    app.get('/names/new/:name/', apiController.addHumanToDBGet);
    app.get('/names/remove/:name/', apiController.destroyHumanGet);
    app.get('/names/:name', apiController.showOneHuman);
};