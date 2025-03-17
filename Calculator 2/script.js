let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let result = document.getElementById('result');
let btn = document.getElementsByClassName('operation')[0].children;


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        let operation = this.value;

        let a = parseInt(num1.value);
        let b = parseInt(num2.value);

                 
         if(num1.value === '' || num2.value === ''|| isNaN(a) || isNaN(a)){
            result.innerText = 'Please enter a valid number';
        } else{
            if (operation === 'add') {
                result.innerText = a + b;            
            } else if (operation === 'sub') {
                result.innerText = a - b;
            } else if (operation === 'mul') {
                result.innerText = a * b;
            } else if (operation === 'div') {
                result.innerText = a / b;
            }
        }
    })

   
    
}
