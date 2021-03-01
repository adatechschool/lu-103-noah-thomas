const fetch = require('node-fetch');
fetch('https://www.affirmations.dev/')
.then(response => response.json())
.then(data => console.log(data))