const adding = (num1, num2)=> {
    return num1 + num2;
}

const subtracting = (num1, num2) => {
    return num1 - num2;
}

const multiplying = (num1, num2) => {
    return num1 * num2;
}

const dividing = (num1, num2) => {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let method = prompt("Enter the operation (+, -, *, /):");


let result;
switch (method) {
    case '+':
        result = adding(num1, num2);
        break;
    case '-':
        result = subtracting(num1, num2);
        break;
    case '*':
        result = multiplying(num1, num2);
        break;
    case '/':
        result = dividing(num1, num2);
        break;
    default:
        result = "Invalid operation";
}


console.log("Result: " + result);
