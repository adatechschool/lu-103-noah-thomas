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
var catchError = function(e){
    console.error(e);
}

var getPosts = async function(){
    var response = await get('https://jsonplaceholder.typicode.com/users')
    var users = JSON.parse(response)
    response = await get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id)
    var posts = JSON.parse(response);
    return posts
}

var getFirstPost = async () => {
    var posts = await getPosts()
    return posts[0]
}


// Promise.all([getPosts(),getFirstPost()]).then((arr)=>{
//     console.log(arr)
// })

var func = () => {
    var arr = Promise.all([getPosts(),getFirstPost()])
    console.log(arr)
}

func()