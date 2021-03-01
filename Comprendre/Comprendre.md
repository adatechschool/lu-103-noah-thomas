# Comprendre

Essayez de synthétiser en binôme votre compréhension de la notion que vous avez vue (s'il s'agissait de plusieurs notions, vous pouvez répéter ce paragraphe plusieurs fois) : 
- Quel est son rôle ? 
- Quel est son intérêt ? 
- A-t-elle des désavantages ? 
- Y a-t-il plusieurs façons de s'en servir ? 
- Quelles sont les étapes importantes pour la mettre en place ? 
- Quelles sont les nuances d'un langage à l'autre ? 
- Existe-t-il des contextes (langages, environnements, outils) où elle n'existe pas ? 
- Quelles sont ses alternatives ? 

-------------------------------------------------------------------------------------

## Explication de code

### Source A
```javascript
function myPromise() {
  return new Promise(function(resolve, reject) {
    var x = Math.random();
    if (x > 0.5) {
      resolve(`Hooray! Your promise was resolved with value ${x}.`);
    } else {
      reject(`Oh no, your promise was rejected with value ${x}`);
    }
  });
}

myPromise()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
```
Le code precedent utilise cree une fonction `myPromise()` qui renvoie promesse d'execution.
Dans la promesse, on attribut une valeur aleatoire comprise entre 0 et 1 a `x` a l'aide la fonction `Math.random()`.
La promesse se resout si la valeur de `x` est strictement surperieur a `0.5`, autrement, elle est rejetee.
On appelle ensuite `myPromise()`, et a l'aide des methodes `.then()` et `.catch()`, on va recuperer les valeurs de `resolve()` et de `reject()`, pour les afficher par la suite.

### Source B

~~~javascript
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function reqListener () {
console.log(this.responseText);
}

var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', 'https://www.affirmations.dev/', true);
req.onload = reqListener;
req.send(null)
~~~
Ce code (NodeJS, d'ailleurs), commence par importe la fonction `XMLHttpRequest` de la bibliotheque `xmlhttprequest` sous le nom de `XMLHttpRequest`.
`XMLHttpRequest` est ensuite instanciee en tant que `req`.
Le type de la reponse est ensuite indiquee via `req.responseType = 'json';`, puis le type de requete (**GET**) l'est egalemment 
Ensuite, on indique qu'une fois la page chargee, on doit executer la notre fonction `reqListener()`, qui nous permet d'afficher le corps de la reponse.
Enfin, on envoie la requete vers `https://www.affirmations.dev/`.
`null` est ici optionnel, et peut etre omis.