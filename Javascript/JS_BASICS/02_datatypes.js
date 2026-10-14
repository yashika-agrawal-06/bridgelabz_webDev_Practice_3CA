//primitives: string, number, undefined, null, boolean, BigInt
//non primitives(reference): object, array, function
//objects store data in key value pairs
//diff btw null and undefined
let score=123
let scoreInString=String(score)
let Username //undefined
let salary=null;      //***returns object if we assign null to smthng */
console.log(Username)
console.log(typeof Username)
console.log(salary)
console.log(typeof salary)
let userInfo={ //object properties
    username:"yashika", address:"mathura", email:"yashika@example.com",
    socialMedia:{
        facebook:"yashika.fb", 
        instagram:"yashika.insta",
        twitter:"https://twitter.com/yashika"
    }
}
userInfo.username="yashika Agrawal"
console.log(userInfo.username) //in backend the data is stored in the form of objects key value pairs
console.log(userInfo.socialMedia.twitter) //accessing nested object
//array
let branch=["cse", "ece", "mech", "civil", "it"]
//function
function printHello(){
    console.log("hello")
}
printHello()


//type conversion
//explicit type conversion -- manually converting one data type to another using built in functions
let s='100'
console.log(s)//100
console.log(typeof s) //string
let n=Number(s)
console.log(n) //100
console.log(typeof n) //number
let b=Boolean(n)
console.log(b) //true
console.log(typeof b) //boolean
let str='hello'
console.log(typeof str) //hello
console.log(Number(str)) //NaN  not a number because hello is not a number
let st=' '
console.log(typeof st) //string
console.log(Number(st)) //0 because space is considered as 0
console.log(Number('')) //0 because empty string is considered as 0
console.log(typeof Number('')) //number
let a =null
console.log(typeof a) //object
console.log(Number(a)) //0 because null is considered as 0
console.log(typeof (a)) //object
console.log(Number(st)) //0 because space is considered as 0
let x=undefined
console.log(typeof x) //undefined
console.log(Number(x)) //NaN because undefined is not a number
console.log(typeof String(x)) //string because String() converts undefined to the string "undefined"
console.log(Boolean(x)) //false because undefined is considered as false
console.log(typeof (Number(x))) //number because Number() converts undefined to NaN which is a number


//implicit type conversion
let ab=10
let cd='20'
console.log(ab+cd) //1020 because + operator converts number to string and concatenates them
console.log(ab-cd) //-10 because - operator converts string to number and subtracts them
console.log(ab*cd) //200 because * operator converts string to number and multiplies them
console.log(ab/cd) //0.5 because / operator converts string to number and divides them