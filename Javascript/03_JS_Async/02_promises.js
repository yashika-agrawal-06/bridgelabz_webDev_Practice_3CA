const promiseOne=new Promise(function(resolve,reject){
    let error=true

    if(error){
        reject() //this will reject the promise if error is true
    }
    else{
         setTimeout(()=>{
        console.log("async task is completed")
        resolve() //this will resolve the promise after 2 seconds
        0},2000)
    }

   
        
})

promiseOne.then(function(){
    console.log("promise is resolved") //why didnt this work because promise is not resolved yet, it is still pending
})
.catch(function(){
    console.log("promise is rejected")    
})
.finally(function(){
    console.log("promise is either resolved or rejected")
})




const promiseTwo=new Promise(function(resolve, reject){
    let data=null
    //let data={userName:"abc",password:"1234"}
    setTimeout(()=>{
        if(data){
            console.log("data is fetched successfully")
            resolve(data)
        }
        else{
            console.log("promise failed")
            reject("error:somethig went wrong")
        }
    },2000)
        
})

// promiseTwo
//     .then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error)
// })



//whenewer we use async await we use try catch to do error handling

async function consumePromiseTwo(){
    try{
        const response=await promiseTwo
        console.log(response)
    } catch (error){
        console.log(error)
    }
     
}
consumePromiseTwo()


///fetch is already made promise that returns an object 


const fetchUser=async()=>{
    try{
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const data1 = await response.json()
    console.log("response from api endpoint",response)
    console.log("data from api endpoint",data1)
    }
    catch(error){
        console.log("error while fetching data from api endpoint",error)
    }
    
};
fetchUser()

