const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const { json } = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(bodyParser.raw());
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
    newQuote(req.body)
    res.send("<meta http-equiv='refresh' content='0;url=/' />")
})

app.listen(port, ()=>{
    console.log(`Server started at http://localhost:${port}`);
});


const newQuote = (body) => {
    fs.appendFile('data/db.json',JSON.stringify(body)+"\n",(e)=>{
        if (e) throw e;
        console.log(`Added ${JSON.stringify(body)} to database.`);
    })
}