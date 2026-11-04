function verifyPayment(transactionId){
    if(transactionId===undefined){
        console.log("payment failed")
        return;
    }
    
    
        console.log(transactionId)
        console.log("Payment is successful")
    

}
verifyPayment()


function addExpenses(exp1,exp2){
    return exp1+exp2
}
const total=addExpenses(20,'23')
console.log(total)


function addExpense(...exp){
    console.log(exp) //array
}
const totall=addExpense(20,23)
//those were all regular functions


//arrow functions

const addnums=(a,b)=>{
    return a+b;


}
console.log(addnums(2,3))

//now converting regurlar function verifypayment to arrow function
const verifyPay=(transactionId)=>{
    if(transactionId===undefined){
        console.log("payment failed")
        return;
    }
    
    
        console.log(transactionId)
        console.log("Payment is successful")
}

verifyPay("abc")

//in arroe functions  "this" keyword doesnt work

const user1={
    name:"user1",
    email:"user@gmail.com",
    address:"Mathura",
    ottSubscriptions:{
        netflix:"basic",
        amazon:"premium",
    },

    show:()=>{
        console.log(`${this.name} has netflix subscription of ${this.ottSubscriptions?.netflix} variant`)
    }
}

user1.show()



//callback functions -- if in any function we give parameter- a function then callback function

function calc(num1, num2, callback){
    console.log(num1,num2,callback)
    return callback(num1,num2)

   
}
 function add(num1,num2){
        return num1+num2;
    }

console.log(calc(2,4,add)) //when we are passing a functopn as an argument we dont add parenthese only the functoon name

//callback hell? 



const numbers=[1,2,3,4,5]
const doubleOfumbers=numbers.map((nums)=>nums*2)
console.log(doubleOfumbers)
//map tales callback function as an argument
//map returns something else here a new array after iterating and performing operations


/*const doubleOfumbers=numbers.map((function func())
now new way to write with arrow functions 
const doubleOfumbers=numbers.map(()=>)*/


const oddnumbers=numbers.filter((num)=>num%2!=0)
console.log(oddnumbers)
//filter checks a conition 


//reduce takes 3 arguments 
const sumOfnumbers=numbers.reduce((acc,num)=>acc+num,0) //if inital value is not provided it takes first value of array and if it is empty will give error?
console.log(sumOfnumbers)

const products=[
    {name:"milk",price:60,inStock:true},
    {name:"Bread",price:40,inStock:false},
    {name:"Rice",price:200,inStock:true},
    {name:"cheese",price:150,inStock:true},
]

const Instock=products.filter((i)=>i.inStock==true)
console.log(Instock)