let a=10
const b=20;
var c=30
//these are all in global scope
console.log(a)
console.log(b)
console.log(c)

//now to give block scope
if(true){
    let d=10
    const e=20
    var f=30
}
//nsole.log(d)
//console.log(e) error
console.log(f) //works bcz functional scoped is var

function fn(){
    if(true){
        let g=10
        const h=11
        var i=12
    }
    console.log(i)//ould work fn scoped
  /*nsole.log(g)
    console.log(h) wont work  block scoped  */
}
fn()
//this wont work too
//nsole.log(i)

function func(){
    var price=10
    fu()
    function fu(){
        price=20
    }
    console.log(price)
}
func()
//what is the problem with var that es6 introduced others 
/*
Lack of Block Scope (Leaky Variables)
var is function-scoped, meaning it completely ignores block statements like if conditions, switch cases, or for loops. A variable declared inside a block leaks out into the surrounding function or global environment
*/

//stringLiteral

const username="Yashika"
let repo=21
console.log("my name is " + username)
//using string template literals
console.log(`hello world`)
console.log(`my name is: ${username} and my repo count is ${repo}` ) 