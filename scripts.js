//BASIC OPS CODE
let num1 = '';
let num2 = '';
let result = '';
let operator = '';

function operate(x, y, operation) {
    const operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
      '%': (a, b) => a % b,
      '**': (a, b) => a ** b
    }
  
    return operation in operators ? operators[operation](x, y) : NaN
  }

const numBtn = document.querySelectorAll('.number-btn');
const operatorBtn = document.querySelectorAll('.op-btn');
const equalsBtn = document.querySelector('#equals-btn')
const inputField = document.querySelector('#user-input');
const outputField = document.querySelector('#output-field');
  
//CLEAR BTN CODE
document.querySelector('#clear-btn').addEventListener('click', () => {
  inputField.value = '';
  outputField.innerText = '';
})

//CODE TO DISPLAY USER INPUT NUMBERS
numBtn.forEach(btn => {
  btn.addEventListener('click', numInput);
})

function numInput(e) {
  const userNum = e.target.innerText;
  inputField.value += userNum;
}

//CODE TO SET OPERATOR
operatorBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    operator = e.target.value;
    console.log(operator);

    if (num1 == '' && num2 == '') {
      num1 = inputField.value;
      console.log(num1);
    }
    else if (num1 && num2 == '') {
      num2 = inputField.value;
      console.log(num2);
    }
    else {
      result = operate(+num1, +num2, operator);
      console.log(result);
    }
  })
})