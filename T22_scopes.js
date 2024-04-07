var globalVariable = "global variable";

function testScope() {
    var localVariable = "local variable";
    
    console.log("Inside the function:");
    console.log("Global variable:", globalVariable);
    console.log("Local variable:", localVariable);
}


console.log("Outside the function:");
console.log("Global variable:", globalVariable);

testScope();
