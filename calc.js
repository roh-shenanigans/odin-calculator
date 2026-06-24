let display = document.querySelector(".display");
let digits = document.getElementsByClassName("digit");
let ops = document.getElementsByClassName("op");

let equals = document.querySelector(".equals")

let equalBtn = document.querySelector(".equals");
// equalBtn.addEventListener("click", operate);

let deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", deleteDigit);

let clearAllBtn = document.querySelector(".clear");
clearAllBtn.addEventListener("click", clearAll);

let operators = ["+", "-", "×", "÷"];

for (digit of digits) {
    digit.addEventListener("click", displayNum);
}

for (op of ops) {
    op.addEventListener("click", update);
}

let num1 = NaN;
let num2 = NaN;
let operator = "";
let wasPrevCalc = false;

// console.log(num1);
// console.log(num2);
// console.log(operator);

function displayNum(event) {
    let num = event.target.textContent;
    display.textContent = display.textContent + num;
}

function deleteDigit(event) {
    // console.log("Works!");
    let num = display.textContent;
    // console.log(num.slice(0, -1));
    display.textContent = num.slice(0, -1);
}

function clearAll(event) {
    display.textContent = "";
    num1 = NaN;
    num2 = NaN;
    operator = "";
    wasPrevCalc = false;
}

function isDisplayEmpty() {
    // console.log(display.textContent);
    return (display.textContent === "");
}

function update(event) {
    // console.log("check!" + event.target.textContent);
    if (wasPrevCalc) {
        display.textContent = "";

        operator = event.target.textContent;
        console.log("op:" + operator)
        num2 = parseInt(display.textContent);
        console.log("num2: " + num2)

        result = getResult();
        display.textContent = result;
        num1 = result;
        wasPrevCalc = true;
        return;

    }

    if (Number.isNaN(num1)) {
        num1 = parseInt(display.textContent);
        display.textContent = "";
        console.log("num1:" + num1);

    } else {
        operator = event.target.textContent;
        console.log("op:" + operator)
        num2 = parseInt(display.textContent);
        console.log("num2: " + num2)

        result = getResult();
        display.textContent = result;
        num1 = result;
        wasPrevCalc = true;
    }
}

function getResult() {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num3;
    }
}

function equalOperator(event) {
    // if (!(Number.isNaN(num1)) && !(Number.isNaN(num2) && (operator))) {
    //     num2 = parseInt(display.textContent);
    //     result = getResult();
    //     display.textContent = result;
    //     // num1 = result;
    //     // wasPrevCalc = true;
    // }
    console.log(num1);

    num2 = parseInt(display.textContent);
    console.log(num2)
    result = getResult();
    display.textContent = result;
}