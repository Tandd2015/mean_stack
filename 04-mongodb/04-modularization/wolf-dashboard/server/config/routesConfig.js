const wolfController= require('../controllers/wolfController')
module.exports= function(app){
    app.get('/', wolfController.loadIndexPage),
    app.get('/wolfs/new', wolfController.loadAddNewWolfPage),
    app.post('/wolf', wolfController.formSubmitAddWolf),
    app.get('/wolfs/:id', wolfController.loadShowOneWolfPage),
    app.get('/wolfs/edit/:id', wolfController.loadEditOneWolfPage),
    app.post('/wolfs/:id', wolfController.formSubmitEditWolf),
    app.get('/wolfs/destroy/:id',wolfController.getDestroyOneWolf),
    app.post('/wolfs/destroy/:id', wolfController.formSubmitDestroyOneWolf)
};