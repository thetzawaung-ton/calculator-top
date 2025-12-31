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

let number;
let firstNum;
let secNum;
let symbol;

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
const operators = document.querySelectorAll('.operator')
display.textContent = "";
const result = document.querySelector(".result");

digits.forEach(digit => {
    digit.addEventListener("click", function() {
        display.textContent += digit.textContent;
        number = Number(display.textContent);
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", function() {
        symbol = operator.textContent;
        firstNum = number;
        display.textContent = "";
    })
})

result.addEventListener("click", function() {
    secNum = number;
    let result = operate(firstNum, symbol, secNum);
    display.textContent = result;
})