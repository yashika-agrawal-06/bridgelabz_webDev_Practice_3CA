// artithmetic + - * / %
let a = 10;
let b=20
let c=b%a
let d=b/a
console.log(c) //0
console.log(d) //2

// assignment operators += -= %= *= /=
a+=b //a=a+b

//comparison operators == === != !== > < >= <=
console.log(a==b) //false
console.log(a===b) //false checks ***data type*** also
console.log(a>b) //true
let e=20
let f="20"
console.log(e==f) //true
console.log(e===f) //false
console.log(e!=f) //false
console.log(e<f) //false
console.log(e>f) //false
let g="21"
console.log(e<g) //true


//ternary operator
let z=10;
let y=20;

let result= (z>y) ? "z is greater":"y is greater"
                   //true case   false case
console.log(result) //y is greater


//null coalescing operator
//works if we want to check for null or undefined values
let i=34
let j=undefined
let h=null
console.log(h ?? "right side value") //right side value
console.log(i ?? "right side value") //34
console.log(j ?? "right side value") //right side value


//array
let arr=[3,5,6,7,8,9]
console.log(arr) // [3,5,6,7,8,9]

//spread opeerator ... to covert it intoindividual items
//to copy
//works on objects and arrays

console.log(...arr) //3 5 6 7 8 9
let arr2=arr //to copy the array but if we modify arr2 it will also modify arr because both are pointing to the same memory location
arr2.push(10)
arr2[0]=100
console.log(arr) // [100,5,6,7,8,9,10]
console.log(arr2) // [100,5,6,7,8,9,10]

let arr3=[...arr] //to copy the array and if we modify arr3 it will not modify arr because both are pointing to different memory location and also because ut has been accessing individual items through spread operator
console.log(arr3) // [100,5,6,7,8,9,10]
arr3.push(20)
arr3[0]=200
console.log(arr) // [100,5,6,7,8,9,10]
console.log(arr3) // [200,5,6,7,8,9,10]


//rest operator ... to convert individual items into array opposite of spread operator
//works on objects and arrays coverts expanded array into single array shrinking

function add(...nums){
    let sum=0;
    for(let i=0; i<nums.length; i++){
        sum+=nums[i]
    }
    return sum
}
console.log(add(1,1,1,1,1,1,5,1,1,1)) //14

//objects
let obj={
    name:"yashika",
    age:20,
    address:{
        city:"mathura",
        state:"up"
    }
}
console.log(obj) // {name: "yashika", age: 25, address: {city: "mathura", state: "up"} }
console.log(obj.name) //yashika **dot operator**
console.log(obj["age"]) //20 **bracket notation**
console.log(obj["address"]["city"]) //mathura **nested bracket notation**
let obj2=obj
obj2.name="yashika agrawal"
console.log(obj.name) //yashika agrawal because both are pointing to the same memory location
console.log(obj2.name) //yashika agrawal
let obj3={...obj} //to copy the object and if we modify obj3 it will not modify obj because both are pointing to different memory location and also because ut has been accessing individual items through spread operator
obj3.name="yashiii agrawal"
console.log(obj.name) //yashika agrawal
console.log(obj3.name) //yashiii agrawal

//in spread operator we get a shallow copy of the object and not a deep copy so if we modify the nested object in obj3 it will also modify the nested object in obj because both are pointing to the same memory location
//same in nested arrays
obj3.address.city="agra"
console.log(obj.address.city) //agra
console.log(obj3.address.city) //agra 

//deep copy of the object using structuredClone() method
let obj4=structuredClone(obj) //deep copy of the object and if we modify obj3 it will not modify obj because both are pointing to different memory location
obj4.address.city="delhi"
console.log(obj.address.city) //agra
console.log(obj4.address.city) //delhi 


//unary operators ++ -- ! typeof delete
//post pre inc dec 4
let x=10
x++ //post increment
console.log(x) //11
++x //pre increment
console.log(x) //12
x-- //post decrement
console.log(x) //11
--x //pre decrement
console.log(x) //10

let q
console.log(typeof q) //undefined
console.log(q) //undefined

let objj={
    name:"yashika",
    age:20, 
    address:{
        city:"mathura",
        state:"up"  
    }
}
console.log(delete objj.address) //true
console.log(objj) // {name: "yashika", age: 20} address property is deleted from the object
console.log(objj.address) //undefined because address property is deleted from the object
console.log(objj.address.city) //TypeError: Cannot read property 'city' of undefined
//kyunki undefined wale ke andr dekhna chch rhe toh error hee aayega isiliye optional chaining aaya

//optional chaining operator ?.
//used to access the nested properties of an object without getting an error if the property does not exist
let objjj={
    name:"yashika",
    age:20, 
    address:{
        city:"mathura",
        state:"up"  
    }
}
console.log(objjj.address?.city) //mathura
console.log(objjj.address?.country) //undefined
console.log(objjj.address?.country?.name) //undefined no error --> being handeled by optional channeling operator