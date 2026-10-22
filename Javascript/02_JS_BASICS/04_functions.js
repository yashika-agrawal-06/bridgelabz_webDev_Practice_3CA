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
