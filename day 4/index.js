let tries = 3
let currentTry = 1
let randomNumber = Math.floor(Math.random() * 10) + 1
alert(`Welcome to guess the number game! You have ${tries} to guess which number I just thought... The number is between 1 and 10 (inclusive).`)

while (currentTry <= 3) {
    let number = prompt(`Try ${currentTry} of 3. Guess a number!`)
    if (number == randomNumber) { 
        alert(`You guessed the number! The number was ${randomNumber}. You win!`)
        break
    }
    (number < randomNumber) ? alert(`Too low!`) : alert(`Too high!`)
    alert(`You have ${tries - currentTry} tries left!`)
    currentTry++
}

if (currentTry > tries) {
    alert(`You lose! The number was ${randomNumber}.`)
}