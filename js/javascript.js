function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNum;
let operator;
let secNum;

function operate(firstNum, operator, secNum) {
    if(operator === "+"){
        return add(firstNum, secNum);
    } else if(operator === "-"){
        return substract(firstNum, secNum);
    } else if (operator === "*") {
        return multiply(firstNum, secNum);
    } else if(operator === "/"){
        return divide(firstNum, secNum);
    }
}

const digits = document.querySelectorAll(".digit");
const display = document.querySelector(".display");
display.textContent = "";
let number = "";

digits.forEach(digit => {
    digit.addEventListener("click", function() {
        display.textContent += digit.textContent;
        number = Number(display.textContent);
    })
})