function job(data) {
    return new Promise((resolve,reject) => {
        console.log(data)
        if (isNaN(data)){
            reject('error')
        } else if (data%2) {
            setTimeout(_=>{resolve('odd')},1000)
        } else {
            setTimeout(_=>{reject('even')},2000)
        } 
    })
