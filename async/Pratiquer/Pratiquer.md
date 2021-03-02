# Pratiquer

Mettez dans ce dossier tout le code source produit dans les exercices proposés pour la partie "Pratiquer" de la fiche Level up

## Source A

```javascript
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function reqListener () {
  console.log(this.responseText);
}

var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', 'https://www.affirmations.dev/', true);
req.onload  = reqListener;
req.send(null);
```

### Version `fetch`

```javascript
const fetch = require('node-fetch');
fetch('https://www.affirmations.dev/')
.then(response => response.json())
.then(data => console.log(data))
```

## Source B

```javascript
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function get(url, success, error) {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            if (req.status === 200) {
                success(req.responseText);
            } else {
                error(req);
            }
        }
    }
    req.open('GET', url, true);
    req.send();
}

function getCat() {
    get('https://api.thecatapi.com/v1/images/search?format=json', 
    function(response) {
        var cat = JSON.parse(response);
        console.log(cat[0]['url']);
    },
    function (error) {
        console.error(error);
    })
}

getCat();
```

#### Questions

1. Ce code sert a renvoye des donnees JSON parsees depuis une API. Les callbacks `success` & `error` servent a gerer les erreurs de connexions, notamment si le code de reponse HTTP est different de **`200 OK`**.

### Version `async`/`await`

```javascript
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
```