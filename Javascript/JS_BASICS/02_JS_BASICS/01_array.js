//arrays are resizable and is heterogenous
const arr=[10,20,30,"yashika",true]
arr.push(9)//to append
arr.unshift(false) //to insert at start
console.log(arr)
console.log(typeof arr)//object
console.log(typeof null) //object 



const arr1=arr.slice(1,3)
console.log("arr1 sliced ",arr1)
console.log("arr before splice and only with slice ",arr)


const arr2=arr.splice(1,3)
console.log("arr2 spliced ",arr2) //includes the right limit too

//the actual diff btw slice and splice

console.log("arr after splice ", arr)

//splice modified the oriinal array  removed the defined range elements from the array
//whereas splice gives the substr only and does not modify the original array 