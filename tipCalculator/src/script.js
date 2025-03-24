//Declare variables
let bill = document.getElementById('bill');
let tip = document.getElementById('tip');
let people = document.getElementById('people');
let calculate = document.getElementById('calculate');
let reset = document.getElementById('reset');
let totalAmount = document.getElementById('total-amount');  
let output = document.getElementById('output');


//Calculate function
function calculateTip() {
    let billValue = parseFloat(bill.value);
    let tipValue = parseFloat(tip.value);
    let peopleValue = parseFloat(people.value);

    let tipAmount = (billValue * tipValue) / 100;
    let total = billValue + tipAmount;
    let perPerson = (total / peopleValue).toFixed(2);

    output.innerHTML = `<div class="calculator__output__tip">
    <p>Bill Amount : ৳ ${billValue}</p> 
    <p>Tip Amount : ৳ ${tipAmount} of ${tipValue}% of ${billValue}</p>
    <p>Total Amount : ৳ ${total}</p>
    <p>Per Person : ৳ ${perPerson}</p>
</div>`;
    
}

//Event listener
calculate.addEventListener('click', calculateTip);



//Reset function
function resetCalculator() {
    bill.value = '';
    tip.value = '';
    people.value = '';
    output.innerHTML = '';
}

//Event listener
reset.addEventListener('click', resetCalculator);