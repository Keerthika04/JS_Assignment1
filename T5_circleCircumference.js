const pi = 3.14159;
let radius = 5;

let Circumference = 2 * pi * radius;

console.log("The circumference of the circle with radius", radius, "is: ", Circumference);

//or

function calculateCircumference(radius) {
    return 2 * pi * radius;
}

let circumference = calculateCircumference(radius);
console.log("The circumference of the circle with radius", radius, "is:", circumference);
