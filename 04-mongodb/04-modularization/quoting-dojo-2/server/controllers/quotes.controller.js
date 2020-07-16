const Quote = require('mongoose').model('Quote');
module.exports={
    loadIndexPage: function(request, response){
        console.log('LoadPage')
        response.render('index')
    },
    loadAllQuotesPage: function(request, response){
        console.log('start QoutePage')
        Quote.find({}).sort({createdAt: 'desc'})
            .then(quotes => {
                console.log('QoutePage', request.body);
                response.render('quotes', { quotes: quotes })
            })
            .catch(error => response.json(error))
    },
    formSubmitAddQuote: function(request, response){
        console.log('start Quote Post')
        const quote= new Quote();
        quote.name= request.body.name;
        quote.quote= request.body.quote;
        quote.save()
        .then(quote =>{
            // console.log('///////////',quote)
        response.redirect('/quotes')})
        .catch(error=> {
            // console.log('**********', error)
            for (let index in error.errors){
                request.flash('formError', error.errors[index].message)
            }
            response.redirect('/');
        })
    }
};