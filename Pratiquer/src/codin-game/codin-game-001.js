function job() {
    return new Promise(function(resolve,reject){
        setTimeout(()=>{resolve('hello world')},2000)
    })
}

module.exports = job;