let num = Math.floor(Math.random() * 20) + 1;

const findNum =()=> {
  let guess = parseInt(prompt("I have chosen a random number between 1 and 20. Try to guess it:"));

  if (isNaN(guess) || guess < 1 || guess > 20) {
    alert("Please enter a valid number between 1 and 20.");
    findNum();
    return;
  }

  if (guess === num) {
    alert("Congratulations! You guessed the correct number.");
  } else if (guess < num) {
    alert("Too low. Try again.");
    findNum();
  } else {
    alert("Too high. Try again.");
    findNum();
  }
}

findNum();
