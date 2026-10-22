const user1={
    name:"user1",
    email:"user@gmail.com",
    address:"Mathura",
    ottSubscriptions:{
        netflix:"basic",
        amazon:"premium",
    },
    show: function showDetails(){
        console.log("user:xyz has netflix subscription of __ variant")
        console.log(`${this.name} has netflix subscription of ${this.ottSubscriptions.netflix} variant`)
    //why this?
    }

}
//diff btw json objects and object

console.log(user1.email)
console.log(user1["email"])
console.log(user1.ottSubscriptions.netflix)

console.log(user1.show())
user1.show()
console.log(Object.keys(user1))
console.log(Object.values(user1))


const obj1={a:1,b:2}
const obj2={c:3,d:4}
const obj3=Object.assign(obj1,obj2)
console.log(obj3)
const obj4={...obj1, ...obj2}
console.log(obj4)
//diff btw both
obj1.b="yashika"
console.log("obj1",obj1)
console.log("obj3",obj3)
console.log("obj4",obj4)

const {user,email,address}=user1 //destructuring
