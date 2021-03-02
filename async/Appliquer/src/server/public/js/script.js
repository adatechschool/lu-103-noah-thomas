var getQuote = (url,selector) => {
    fetch(url)
    .then(response =>{
        try {
            return response.json()
        } catch (error) {
            if (error instanceof SyntaxError){
            } else {
                throw error
            }
        }
    })
    .then(data => {
        let quote;
        let author;
        if (selector === 0) {
            quote = data.affirmation
            author = "me, to you"
        } else if (selector === 1) {
            quote = data.data[0].quote
            author = data.data[0].author
        } else {
            quote = data.quote
            author = data.author
        }
        console.log(quote);
        console.log(author);
        quote_box.innerHTML = quote
        quote_author.innerHTML = author
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


var quote_box = document.getElementById('quote')
var quote_author = document.getElementById('quote-author')

var selector = getRandomInt(3)
var url;
open
if (selector === 0){
    url = 'https://www.affirmations.dev/'
} else if (selector === 1){
    url = 'http://selfconfidencequotes.herokuapp.com/'
} else {
    url = '/data/db.json'
}

getQuote(url,selector)