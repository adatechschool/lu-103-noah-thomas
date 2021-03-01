var get = function(url) {
    return new Promise(function(resolve,reject){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            }
            else {
                reject(xhr);
            }
        }
    }
    xhr.open('GET',url,true);
    xhr.send();
    });
}
get('https://jsonplaceholder.typicode.com/users').then(function(response){
    console.log(response);
}).catch(function(e){
    console.log(e);
});

var catchError = function(e){
    console.error(e);
}

var getPosts = function(){
    return get('https://jsonplaceholder.typicode.com/users').then(function(resp){
        var users = JSON.parse(resp);
        return get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id)
    }).then(function (resp){
        var posts = JSON.parse(resp);
        return posts
    })
}



getPosts().then(function(posts){
    console.log(posts[0]);
}).catch(catchError);



// let p = new Promise(function(resolve,reject)) {
//     ...
//     ...
//     resolve(...)
// })

// p.then(function(response){ ... })
// p.catch(function(e){ ... })