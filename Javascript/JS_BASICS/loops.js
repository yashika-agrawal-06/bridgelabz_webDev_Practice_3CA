/*{
    scope
}*/

function func(){
    //functional scope
    var x=10;
    if(true){
        let a =10;
        var b=20;
        //ifelse scope
    }
    //console.log(a) //error out of block printing
    console.log(b) //20 not block scoped

}
func()
//console.log(x) //error out of function scope printing

//var=function scoped
//let and const =block scoped


for(let i=0;i<5;i++){
    console.log(i)
}
//icpuc initualization condition print update condition

//while loop
i=0
while(i<5){
    console.log(i)
    i++
}

//do while loop
let j=6;
do{
    console.log(j)
    j++
}while(j<5)


//for of loop we did not use index to access the elements of the array here we directly access the elements of the array
let arr=[1,2,3,4,5]
for(let i of arr){
    console.log(i)
}

//for in loop we use it for objects to access the keys of the object
let obj={
    name:'yashika',
    age:20,
    gender:'female',
}
for(let key in obj){
    console.log(key) //name age gender
    console.log(obj[key]) //yashika 20 female
    console.log(key, obj[key]) //name yashika age 20 gender female
    console.log(`${key}: ${obj[key]}`) //name: yashika age: 20 gender: female
    console.log(key + ": " + obj[key]) //name: yashika age: 20 gender: female
    console.log(key + " is " + obj[key]) //name is yashika age is 20 gender is female
    console.log(obj.x) //undefined because x is not a key in the object
}
   

let val=7
let flag=false;
if(val<2){
    console.log("not prime")
}
for(let i=2;i<val/2;i++){ //complexity o(n/2) = o(n)
    if(val%i==0){
        flag=true
        break
    }
   
}
 if(flag==true){
        console.log("not prime")
    }
else{
        console.log("prime")
}

//fibonacci series
let n1=0,n2=1,n3;
let n=10;
console.log(n1)
console.log(n2)
for(let i=0;i<n-2;i++){
    n3=n1+n2
    console.log(n3)
    n1=n2
    n2=n3
}