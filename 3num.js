let user=require("readline-sync")
let num1=user.questionInt("enter num")
let num2=user.questionInt("enter num")
let num3=user.questionInt("enter num")
if (num1>num2){
    console.log(num1,"num1 is greater than")
}else if(num2>num3){
    console.log(num2,"num2 is greater than")
}else{
    console.log(num3,"num3 is greater than")
}