let a, b, result = 0;
let running = true;

function add(alpha, beta) {
    return alpha + beta;
}

function subtract(alpha, beta) {
    return alpha - beta;
} 

function multiply(alpha, beta) {
    return alpha * beta;
}

function divide(alpha, beta) {
    return alpha / beta;
}

function module(alpha, beta) {
    return alpha % beta;
}

function exponent(alpha, beta) {
    return alpha ** beta;
}

function clear() {
    a = 0;
    b = 0;
}


while (running) {
    let option = prompt("What would you like to do? [1] Add [2] Subtract [3] Multiply [4] Divide [5] Module [6] Exponent. Type [quit] to exit.");
    switch (option) {
        case "1":
            a = prompt(`Enter the first number:\n ${a} + ${b} = ${add(a, b)}`);
            b = prompt(`Enter the second number:\n ${a} + ${b} = ${add(a, b)}`);
            alert(`The result is ${add(a, b)}`);
            clear();
            break;
        case "2":
            a = prompt(`Enter the first number:\n ${a} - ${b} = ${subtract(a, b)}`);
            b = prompt(`Enter the second number:\n ${a} - ${b} = ${subtract(a, b)}`);
            alert(`The result is ${subtract(a, b)}`);
            clear();
            break;
        case "3":
            a = prompt(`Enter the first number:\n ${a} * ${b} = ${multiply(a, b)}`);
            b = prompt(`Enter the second number:\n ${a} * ${b} = ${multiply(a, b)}`);
            alert(`The result is ${multiply(a, b)}`);
            clear();
            break;
        case "4":
            a = prompt(`Enter the first number:\n ${a} / ${b} = ${divide(a, b)}`);
            b = prompt(`Enter the second number:\n ${a} / ${b} = ${divide(a, b)}`);
            alert(`The result is ${divide(a, b)}`);
            clear();
            break;
        case "5":
            a = prompt(`Enter the first number:\n ${a} % ${b} = ${module(a, b)}`);
            b = prompt(`Enter the second number:\n ${a} % ${b} = ${module(a, b)}`);
            alert(`The result is ${module(a, b)}`);
            clear();
            break;
        case "6":
            a = prompt(`Enter the first number:\n ${a} ** ${b} = ${exponent(a, b)}`);
            b = prompt(`Enter the second number:\n ${a} ** ${b} = ${exponent(a, b)}`);
            alert(`The result is ${exponent(a, b)}`);
            clear();
            break;
        case "quit":
            running = false;
            break;
        default:
            alert("Invalid option");
    }
}