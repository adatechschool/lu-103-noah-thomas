const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('index.html',{
        user: "Bella Guerin",
        title: "Self-Confidence Server"
    });
});
app.get('/new-quote', (req, res) => {
    res.render('new-quote.html',{
        title: "Post a new quote"
    })
})

app.post('/post', (req, res) => {
    
})

app.listen(port, ()=>{
    console.log(`Server started at http://localhost:${port}`);
});
