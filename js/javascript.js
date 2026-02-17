function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let number = null;
let firstNum;
let secNum;
let symbol = null;
let operatorIsClicked = false;
let resetDisplay = false;
let decimalIsClicked = false;

function operate(firstNum, operator, secNum) {
    if(operator === "+"){
        return add(firstNum, secNum);
    } else if(operator === "-"){
        return subtract(firstNum, secNum);
    } else if (operator === "*") {
        return multiply(firstNum, secNum);
    } else if(operator === "/"){
        return divide(firstNum, secNum);
    }
}

const digits = document.querySelectorAll(".digit");
const display = document.querySelector(".display");
const operators = document.querySelectorAll('.operator')
display.textContent = "0";
const result = document.querySelector(".result");
const clear = document.querySelector(".clear");

clear.addEventListener("click", function() {
    display.textContent = "0";
    firstNum = null;
    secNum = null;
    symbol = null;
    number = null;
    operatorIsClicked = false;
    decimalIsClicked = false;

    operators.forEach(operator => {
            operator.classList.remove('active');
    })
})

digits.forEach(digit => {
    digit.addEventListener("click", function() {
        if(resetDisplay || display.textContent === "0") {
            display.textContent = "";
        }
        display.textContent += digit.textContent;
        number = Number(display.textContent);
        operatorIsClicked = false;
        resetDisplay = false;
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", function() {
        if(symbol !== null && operatorIsClicked) {
            symbol = operator.textContent;
            return;
        }

        if (symbol == null) {
            symbol = operator.textContent;
            firstNum = number;
        } else {
            secNum = number;
            if(symbol === "/" && secNum === 0) {
                display.textContent = "Can't divided by 0";
            } else {
                let result = operate(firstNum, symbol, secNum);
                if(!Number.isInteger(result)) {
                    result = Math.round(result * 100) / 100;
                }
                symbol = operator.textContent;
                firstNum = result;
                display.textContent = result;
            }
        }
        operatorIsClicked = true;
        resetDisplay = true;
        decimalIsClicked = false;
    })
})

result.addEventListener("click", function() {
    if(!firstNum) {
        firstNum = 0;
        symbol = "+";
    }
    if(!firstNum && !number) {
        firstNum = 0;
        number = 0;
        symbol = "+";
    }
    secNum = number;
    if(symbol === "/" && secNum === 0) {
        display.textContent = "Can't divided by 0";
    } else {
        let result = operate(firstNum, symbol, secNum);
        if(!Number.isInteger(result)) {
            result = Math.round(result * 100) / 100;
        }
        display.textContent = result;
    }
    operatorIsClicked = false;

    operators.forEach(operator => {
            operator.classList.remove('active');
    })
})

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", function() {
    if(display.textContent.length === 1) {
        display.textContent = "0";
        number = 0;
        return;
    }

    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    number = Number(display.textContent);
})

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", function() {
    if(decimalIsClicked) {
        return;
    }

    display.textContent += ".";
    decimalIsClicked = true;
})

const container = document.querySelector('.container');
container.addEventListener('click', function(event) {
    if(event.target.classList.contains('operator')) {
        operators.forEach(operator => {
            operator.classList.remove('active');
        })

        event.target.classList.add('active');
    }
})