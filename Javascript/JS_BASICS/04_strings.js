//string methods to create strings
let str="yashika"
console.log(typeof (str))
let str2=new String("yashi")
console.log(typeof (str2))
//console.log(str_proto) a method to get every func or methods of strings

console.log(str.includes("y"))//true
console.log(str.includes("ys")) //false bcz includes check consecutive substring 

str.toUpperCase()
console.log(str.toUpperCase()) //string is ismmutable 
console.log(str)//that is why it stays the same here 
console.log(str.replace('s','y'))//usually needed in backend to sanitize strings or keep in format 
//when we take a url from frontend there are extra characters so backend uses replace to replace non needed stuff from url
console.log(str.slice(1,4))
