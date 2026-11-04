console.log("task 1")
console.log("task 2")
setTimeout(()=>console.log("I am called after 2 seconds"),2000)
console.log("task 3")

/*output  
task 1
task 2
task 3
I am called after 2 seconds*/

console.log("task 1")
console.log("task 2")
setTimeout(()=>console.log("I am called after 0 seconds"),0)
console.log("task 3")

/*                                                                                                    
these all are asynchronous tasks
task 1
task 2
task 3
task 1
task 2
task 3
I am called after 0 seconds
I am called after 2 seconds*/
console.log("-------------------")

console.log("task 1")
console.log("task 2")
setTimeout(()=>console.log("I am called after 0 seconds"),0)
console.log("task 3")

Promise.resolve().then(()=>console.log("promise resolved"))

// promises after callback hell 

function placeOrder(callback){
    setTimeout(()=>{
        console.log("1. order is placed")},1000)
        callback()
}

function makePayment(callback){
    setTimeout(()=>{
        console.log("2. payment is made")},1000)
        callback()
}

function confirmOrder(callback){
    setTimeout(()=>{
        console.log("3. order is confirmed")},1000)
        callback()
}

function assignDeliveryPartner(callback){
    setTimeout(()=>{
        console.log("4. delivery partner is assigned")},1000)
        callback()
}

placeOrder(function(){
    makePayment(function(){
        confirmOrder(function(){
            assignDeliveryPartner(function(){
                setTimeout(()=>{
                    console.log("5. order is delivered")},1000)
                });
        });
    });
});

//this is why promises are used to avoid callback hell and make code more readable and maintainable.
//error handling can be done in promises but not in callack hell. In callback hell if any error occurs then the whole code will break and we have to write a lot of code to handle errors but in promises we can handle errors easily using catch method.