// const Quote = require('mongoose').model('Quote');
const Quote= require('../models/quote.model.js')
module.exports={
    loadIndexPage: function(request, response){
        response.render('index')
    },
    loadAllQuotesPage: function(request, response){
        Quote.find({}).sort({createdAt: 'desc'})
            .then(quotes => {
                response.render('quotes', { quotes: quotes })
            })
            .catch(error => response.json(error))
    },
    formSubmitAddQuote: function(request, response){
        const quote= new Quote();
        quote.name= request.body.name;
        quote.quote= request.body.quote;
        quote.save()
        .then(quote =>{console.log('///////////',quote)
            response.redirect('/quotes')})
        .catch(error=> {console.log('**********', error)
            for (let index in error.errors){
                request.flash('formError', error.errors[index].message)
            }
            response.redirect('/');
        })
    }
};