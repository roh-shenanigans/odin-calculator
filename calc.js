let display = document.querySelector(".display");
let digits = document.getElementsByClassName("digit");
ops = document.getElementsByClassName("op");

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
}

function isDisplayEmpty() {
    // console.log(display.textContent);
    return (display.textContent === "");
}

function update(event) {
    // console.log("check!" + event.target.textContent);
}