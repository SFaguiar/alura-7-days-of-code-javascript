let name = window.prompt("Whats your name?")
let age = window.prompt("How old are you?")
let proglang = window.prompt("Which programming language are you learning?")

window.alert(`Hello ${name}, you are ${age} years old and are learning ${proglang}!`)
let answer = window.prompt(`Do you like studying ${proglang}? Answer with 1 for "yes" and 2 for "no".`)

if (answer == 1) {
    window.alert("Very good! Keep studying and you will be very successful.")
} else if (answer == 2) {
    window.alert("Ahh what a shame... Have you tried learning other languages?")
} else {
    window.alert("Invalid aswer. I didn't understand what did you mean...")
}