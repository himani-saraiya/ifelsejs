let readlineaSync = require("readline-sync");
var number=readlineaSync.questionInt("enter a number");
if(number%7===0 && number%11===0){
   console.log("Divisible by both");
}
else{
   console.log("Not divisible by both");
}