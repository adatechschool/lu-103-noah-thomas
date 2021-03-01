var getQuote = (url,selector) => {
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


quote_box = document.getElementById('quote')
quote_author = document.getElementById('quote-author')

selector = Math.random()
if (selector > 0.5){
    url = 'https://www.affirmations.dev/'
    sel = 0
} else {
    url = 'http://selfconfidencequotes.herokuapp.com/'
    sel = 1
}

getQuote(url,sel)