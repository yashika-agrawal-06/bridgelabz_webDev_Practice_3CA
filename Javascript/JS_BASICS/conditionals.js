let age=18
let year=2024
if(age<18){
    console.log("you are a minor")
} else {
    console.log("you are not a minor")
}
if(year%4==0&&year%100!=0||year%400==0){
    console.log("leap year")
}
else{
    console.log("not a leap year")
}
let x=4
switch(x){
    case 1:
        console.log("monday")
        break
    case 2:
        console.log("tuesday")
        break
    case 3:
        console.log("wednesday")
        break
    case 4:
        console.log("thursday")
        break
    case 5:
        console.log("friday")
        break
    default:
        console.log("weekend")
}