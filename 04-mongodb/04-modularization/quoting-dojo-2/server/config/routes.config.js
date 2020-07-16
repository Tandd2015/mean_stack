const quotesController= require('../controllers/quotes.controller.js')
module.exports= function(app){
    app.get('/', quotesController.loadIndexPage),
    app.get('/quotes', quotesController.loadAllQuotesPage),
    app.post('/quotes', quotesController.formSubmitAddQuote)
};
