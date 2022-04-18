let readlineaSync=require("readline-sync");
var Number=readlineaSync.questionInt("enter a number")
if(Number%3 === 0){
    console.log("choco")
}
else if(Number % 7==0){
    console.log("late")
}
else if(Number%3==0 && Number%7==0){
    console.log("Chocolate")
}
else {
    console.log("Not divisible by 3 , 7")
}