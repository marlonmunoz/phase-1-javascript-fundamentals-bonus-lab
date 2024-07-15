// Write your code here
const username = "alice123";

const password = "flatironschool";

let isAuthorized 

if(username === "alice123" && password === "flatironschool"){
    isAuthorized = true
}
else{
    isAuthorized = false
}

const loginValidationPhrase = isAuthorized === true? "Welcome " + username + "!" : "Invalid username or password!"

const randomNumber = Number.parseInt(Math.random() * 10) + 1;
                    // Math.floor(Math.random() * 10) + 1:

const luckyNumberPhrase = `Your lucky number is ${randomNumber}!`