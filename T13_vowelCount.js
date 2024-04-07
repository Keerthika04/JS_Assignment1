const countVowels = (sentence) => {
    sentence = sentence.toLowerCase();
    const vowels = "aeiou";

    let vowelCount = 0;

    for (let i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}
const sentence = "Hey! I am Keerthika";
console.log("Number of vowels:", countVowels(sentence));
