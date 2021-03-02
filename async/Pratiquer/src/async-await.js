var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var get = function(url) {
    return new Promise(function(resolve,reject){
    var req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if (req.readyState === 4) {
            if (req.status === 200) {
                resolve(req.responseText);
            }
            else {
                reject(req);
            }
        }
    }
    req.open('GET',url,true);
    req.send();
    });
}

async function getCat() {
    var response = await get('https://api.thecatapi.com/v1/images/search?format=json')
    var cat = JSON.parse(response)
    console.log(cat[0]['url'])
}

getCat();