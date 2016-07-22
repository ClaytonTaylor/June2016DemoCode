angular.module('QuoteMe', [])
    .controller('Quotes', Quotes)
    .factory('QuoteFactory', QuoteFactory)

Quotes.$inject = ['QuoteFactory']

function Quotes(QuoteFactory) {
    console.info('Quotes Controller:loaded')

    var quotes = this

    quotes.author = '' // this is the value of the input
    quotes.selectedAuthor = '' // this is the value of the currently clicked author
    quotes.text = '' // this is the value of textarea
    quotes.list = QuoteFactory.quotes
    quotes.rating = 0;

    quotes.addQuote = function() {
        console.debug('Hey maaaan, you toally clicked submit duuude');

        if( quotes.author && quotes.text ) { // fully cross-browser
            QuoteFactory.quotes.push({
                author: quotes.author,
                text: quotes.text,
                rating: quotes.rating
            })
        }
        console.debug(QuoteFactory.quotes)

        quotes.author='' // because of data binding, this will clear the form value for the input
        quotes.text=''   // because of data binding, this will clear the form value for the textarea
    }

    quotes.burninate = function (quote) {
        var index = quotes.list.indexOf(quote)

        if( index !== -1 ) {
            quotes.list.splice(index,1)
        }
    }

    quotes.filterAuthor = function(author) {
        console.debug(author)
        quotes.selectedAuthor = author;
    }
}

function QuoteFactory() {
    // localStorage.setItem('quotes', JSON.stringify(quotes))
    // try/catch
    // JSON.parse(localStorage.getItem('quotes'))

    return {
        quotes: [{
            author: 'Shakespeare',
            text: 'To be or not to be.',
            rating: 3
        }, {
            author: 'Mr. T',
            text: 'I pity the fool!',
            rating: 5
        },{
            author: 'TaterGuy',
            text: 'I like taters',
            rating: 4
        }]
    }
}
