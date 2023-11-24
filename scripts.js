//BASIC OPS CODE
let num1 = '';
let num2 = '';
let result = '';
let operator = '';

//CORE FUNCTION
function operate(x, y, operation) {
    const operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
      '%': (a, b) => a % b,
      '**': (a, b) => a ** b
    }
    if (operation == '/' && y == 0) {
      alert(`Hey that's illegal!`);
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
  num1 = '';
  num2 = '';
  result = '';
  operator = '';
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
    if (operator) {
      if (num1 && num2) {
        result = operate(+num1, +num2, operator);
        num1 = result;
        outputField.innerText = num1;
        inputField.value = '';
        operator = '';
        console.log({num1, num2, operator, result});
      }
      else if (num1 && num2 == '') {
        num2 = inputField.value;
        result = operate(+num1, +num2, operator);
        num1 = result;
        outputField.innerText = num1;
        inputField.value = '';
        // num2 = '';
        operator = '';
        console.log({num1, num2, operator, result});
      }
    }

    operator = e.target.value;

    if (num1 == '' && num2 == '') {
      num1 = inputField.value;
      outputField.innerText = num1;
      inputField.value = '';
      console.log({num1, num2, operator, result});
    }
    else {
      result = operate(+num1, +num2, operator);
      console.log({num1, num2, operator, result});
    }
  })
})

//CODE FOR EQUALS BUTTON
equalsBtn.addEventListener('click', () => {
    num2 = inputField.value;
    result = operate(+num1, +num2, operator);
    num1 = result;
    operator = '';
    outputField.innerText = num1;
    inputField.value = '';
    console.log({num1, num2, operator, result});
})