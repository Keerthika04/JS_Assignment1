
const findNum = (min, max) => {
    let guess = parseInt(prompt(`I have chosen a random number between ${min} and ${max}.\n Try to guess it:`));

    if (isNaN(guess) || guess < min || guess > max) {
        alert(`Please enter a valid number between ${min} and ${max}.`);
        findNum(min, max);
        return;
    }

    if (guess === num) {
        alert("Congratulations! You guessed the correct number.");
    } else if (guess < num) {
        alert("Too low. Try again.");
        findNum(min, max);
    } else {
        alert("Too high. Try again.");
        findNum(min, max);
    }
}

let minRange = parseInt(prompt("Enter the minimum number in the range:"));
let maxRange = parseInt(prompt("Enter the maximum number in the range:"));
let num = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

if (isNaN(minRange) || isNaN(maxRange) || minRange >= maxRange) {
    alert("Please enter valid numbers for the range.");
} else {
    findNum(minRange, maxRange);
}
