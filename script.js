console.log('hello world')

let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener('DOMContentLoaded', function () {
    //Getting components from calculator
    let allClear = document.querySelector(".allClear");
    let clear = document.querySelector(".clear");
    let decimal = document.querySelector(".decimal");
    let equals = document.querySelector(".equals");

    let operators = document.querySelectorAll(".operator");
    let numbers = document.querySelectorAll(".number");

    let result = document.querySelector(".result");
    let userInput = document.querySelector(".userInput");

    numbers.forEach((number) => number.addEventListener("click", function (e) {
        handleNumber(e.target.textContent);
        userInput.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function (e) {
        handleOperator(e.target.textContent);
        result.textContent = previousValue + " " + operator;
        userInput.textContent = currentValue;
    }))


    allClear.addEventListener("click", function () {
        previousValue = "";
        currentValue = "";
        operator = "";
        result.textContent = currentValue;
        userInput.textContent = currentValue;
    })

    clear.addEventListener("click", function () {
        currentValue = "";
        userInput.textContent = currentValue;
    })

    equals.addEventListener("click", function () {
        calculate()
        result.textContent = '';
        userInput.textContent = previousValue;
    })

    decimal.addEventListener("click", function () {
        addDecimal()
    })
})

function handleNumber(num) {
    if (currentValue.length <= 100) {
        currentValue += num;
    }

}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+") {
        previousValue += currentValue;
    } else if (operator === "-") {
        previousValue -= currentValue;
    } else if (operator === "×") {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue
    }

}

function addDecimal() {
    if (!currentValue.includes(".")) {
        currentValue += '.';
    }
}

function surprise() {
    alert("Just another alert")
}