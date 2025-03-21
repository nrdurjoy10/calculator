//Declaration of variables
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let ans = document.getElementById('ans');
let clear = document.querySelector('.clear');
let equal = document.getElementById('equal');
let display = document.getElementById('display');
let deleteLast = document.getElementById('deleteLast');

//Declaration of arrays
let operatorsArray = [];
//Create an array of operators
operators.forEach((operator) => {
    let operatorValue = operator.value;
    operatorsArray.push(operatorValue);
});



let input = '';
 operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        input = e.target.value;
        appendToDisplay(input);
    });
    
}
);


numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        input = e.target.value;
        appendToDisplay(input);
    });
}
);

//Append the input to the display
function appendToDisplay(input) {
    const lastChar = display.value[display.value.length - 1];

    // Prevent double operators
    if (operatorsArray.includes(lastChar) && operatorsArray.includes(input)) {
        return;
    }
    
    display.value += input;
}
appendToDisplay(input);

//Calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

//Event listeners
ans.onclick = calculate;
equal.onclick = calculate;

//Clear the display
clear.onclick = function() {
    display.value = '';
}

//Delete the last character
deleteLast.onclick = function() {
    display.value = display.value.slice(0, -1);
}
