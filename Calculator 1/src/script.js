const num1 = document.getElementById('number1');
const num2 = document.getElementById('number2');
const result = document.getElementById('result');
const operators = document.getElementById('operators');
const button = document.getElementById('button');


const calculate = () => {
    let number1 = parseFloat(num1.value);
    let number2 = parseFloat(num2.value);
    let operator = operators.value;

    console.log(number1, number2, operator);
    
    if (isNaN(number1) || isNaN(number2)) {
        result.value = 'Enter valid numbers';
        return;
    }
    // if (number1 == null || number2 == null || operator == null) {
    //     result.value = 'Enter valid numbers';
    //     return;
    // }

    let output = 0;
    switch (operator) {
        case '+':
            output = number1 + number2;
            break;
        case '-':
            output = number1 - number2;
            break;
        case '*':
            output = number1 * number2;
            break;
        case '/':
            output = number1 / number2;
            break;
        default:
            output = 'Invalid operator';
    }

    // if (operator === '+') {
    //     output = number1 + number2;
    // } else if (operator === '-') {
    //     output = number1 - number2;
    // } else if (operator === '*') {
    //     output = number1 * number2;
    // } else if (operator === '/') {
    //     output = number1 / number2;
    // }

    result.value = `${number1} ${operator} ${number2} = ${output}`;
}


button.addEventListener('click', calculate);