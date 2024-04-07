const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
let minRange = 10; 
let maxRange = 20; 
  
let randomNumber = getRandomNumber(minRange, maxRange);
console.log("Random number between", minRange, "and", maxRange, "is:", randomNumber);
  