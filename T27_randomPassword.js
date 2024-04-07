const generatePassword =(length)=> {
    let keys = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;<>,.?/~"; 
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * keys.length);
        password += keys[randomIndex];
    }
    return password;
}

let passwordLength = 12; 
let randomPassword = generatePassword(passwordLength);
console.log("Random password:", randomPassword);
