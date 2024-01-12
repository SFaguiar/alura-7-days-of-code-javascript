let front_courses = ['Vue', 'React']
let back_courses = ['C#', 'Java']
let all_courses = front_courses.concat(back_courses)
let chosen_courses = []
const INVALID_ANSWER_MESSAGE = `Invalid answer! Please choose a valid answer!`

alert(`Greetings! Welcome to the developer mini-guide game!`)
alert(`You have to choose which path you want to follow in your career.`)
alert(`Front-end: 'a programming area dedicated to creating the visual and interactive part of a website, application or software. It is what the user sees and uses when accessing a digital platform' [Kenzie 2023].`)
alert(`Back-end: 'Backend developers mainly focus on how the website works. They write code focused on the functionality and logic that makes the web application they work on work, and the technology they use is never seen by the users accessing the web application' [Harve].`)

while (true) {
    var pill = prompt(`So, you are going to choose the back-pill or the front-pill? Type 1 for back-end and 2 for front-end.`)
    if (pill == 1) {
        alert(`So, you choose back, huh? Nice, that's quite challenging! We have two options then.`)
        let course = prompt(`We have right now a ${back_courses[0]} and a ${back_courses[1]} courses. It's time to choose. Type 0 for ${back_courses[0]} and 1 for ${back_courses[1]}!`)
        
        if (course == 0 || course == 1 ) {
            chosen_courses.push(back_courses[course])
            back_courses.splice(Number(course), 1)
            break
        } else {
            alert(INVALID_ANSWER_MESSAGE)
        }
    } else if (pill == 2) {
        alert(`Awesome! You choose front, a beautiful area! We have two options then.`)
        let course = prompt(`We have right now a ${front_courses[0]} and a ${front_courses[1]} courses. It's time to choose.
        Type 0 for ${front_courses[0]} and 1 for ${front_courses[1]}!`)

        if (course == 0 || course == 1 ) {
            chosen_courses.push(front_courses[course])
            front_courses.splice(Number(course), 1)
            break
        } else {
            alert(INVALID_ANSWER_MESSAGE)
        }

    } else {
        alert(INVALID_ANSWER_MESSAGE) 
    }
}

alert(`Congratulations! You've become a expert in ${chosen_courses}!`)
choice = prompt("Type 1 to continue specializing in the chosen area or 2 to continue developing to become Fullstack!")
if (choice == 1) {
    (pill == 1) ? remaining_courses = back_courses : remaining_courses = front_courses
    all_courses = chosen_courses.push(remaining_courses[0])
} else if (choice == 2) {
    let random_course = Math.floor((Math.random() * 2)  % 1)
    (pill == 1) ? chosen_courses = chosen_courses.push(front_courses[random_course]) : chosen_courses = chosen_courses.push(back_courses[random_course])
}
alert(`You've learned ${chosen_courses.length} courses so far, which are ${chosen_courses}.`)

choice = prompt("Is there any other technology you would like to learn? Type 'ok' if yes.");
while (choice === "ok"){
    let new_technology = prompt("Which one? Type its name.")
    chosen_courses.push(new_technology)
    alert(`You've learned ${new_technology}!`)
    choice = prompt("Is there any other technology you would like to learn? Type 'ok' if yes.");
}

alert(`Good bye! You've learned ${chosen_courses.length} courses, which are ${chosen_courses}. Nicely done!`)