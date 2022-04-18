var u=require("readline-sync");
var age=u.questionInt("enter age::");
var sex=u.question("enter the sex(M/F)")
if (sex=="F"){
	console.log("she work in urban area")
}    
if (age>20 && age<40){
	if (sex=="M"){
		console.log("work in any where")
    }
}        
if (age>40 && age<60){
	if (sex=="M"){
		console.log("he is work in urban area")
    }
	else{
		console.log("ERROR")
    }
}