//OS Modules
const os=require('os');

//info about cureent end user
const user=os.userInfo();
console.log(user)
//Method returns the system uptime in seconds

console.log("The time in secons is " + os.uptime());

//Some more methods, 
const methodsobj={
name:os.type(),
release:os.release(),
totalmem:os.totalmem(),
freemem:os.freemem(),
}
console.log(methodsobj);