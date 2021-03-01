var getQuoteFromWeb = (url,selector) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (selector === 0) {
            quote = data.affirmation
            author = "me, to you"
        } else if (selector === 1) {
            quote = data.data[0].quote
            author = data.data[0].author
        }
        quote_box.innerHTML = quote
        quote_author.innerHTML = author
    });
}

var getQuoteFromLocal = _ =>{
    fetch("/data/db.json")
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var quote_box = document.getElementById('quote')
var quote_author = document.getElementById('quote-author')

var selector = getRandomInt(3)

if (selector === 0){
    getQuoteFromWeb('https://www.affirmations.dev/',selector)
} else if (selector === 1){
    getQuoteFromWeb('http://selfconfidencequotes.herokuapp.com/',selector)
} else {
    getQuoteFromLocal()
}

