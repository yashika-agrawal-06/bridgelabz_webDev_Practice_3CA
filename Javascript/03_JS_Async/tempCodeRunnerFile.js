const promiseOne=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("async task is completed")},2000)
        resolve() //this will resolve the promise after 2 seconds