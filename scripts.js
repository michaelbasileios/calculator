//BASIC VARIABLES
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
    if (operation == '/' && y === 0) {
      return `Hey that's illegal!`;
    }
    return operation in operators ? operators[operation](x, y) : NaN
  }

const numBtn = document.querySelectorAll('.number-btn');
const decimalBtn = document.querySelector('#decimal-btn');
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
  decimalBtn.disabled = false;
  console.clear();
})

//DISPLAY USER INPUT NUMBERS
numBtn.forEach(btn => {
  btn.addEventListener('click', numInput);
})

function numInput(e) {
  const userNum = e.target.innerText;
  inputField.value += userNum;
}

//DECIMAL BUTTON
decimalBtn.addEventListener('click', (e) =>{
  inputField.value += ".";
  decimalBtn.disabled = true;
})

//OPERATOR BUTTONS
operatorBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (operator) {
      if (num1 && num2) {
        result = operate(+num1, +num2, operator);
        num1 = fixedDecimal(result);
        outputField.innerText = num1;
        decimalBtn.disabled = false;
        inputField.value = '';
        operator = '';
        num2 = '';
        console.log({num1, num2, operator, result});
      }
      else if (num1 && num2 == '') {
        num2 = inputField.value;
        result = operate(+num1, +num2, operator);
        num1 = fixedDecimal(result);
        outputField.innerText = num1;
        decimalBtn.disabled = false;
        inputField.value = '';
        operator = '';
        console.log({num1, num2, operator, result});
      }
    }

    operator = e.target.value;

    if (num1 == '' && num2 == '') {
      num1 = inputField.value;
      outputField.innerText = num1;
      decimalBtn.disabled = false;
      inputField.value = '';
      console.log({num1, num2, operator, result});
    }
  })
})

//EQUALS BUTTON
equalsBtn.addEventListener('click', () => {
  if (num1 === '' || operator === '') {
   return;
  }
  num2 = inputField.value;
  result = operate(+num1, +num2, operator);
  num1 = fixedDecimal(result);
  decimalBtn.disabled = false;
  num2 = '';
  operator = '';
  outputField.innerText = num1;
  inputField.value = '';
  console.log({num1, num2, operator, result});
})

//CHECK FOR DECIMAL POINT
function checkDecimal(n) {
	return String(n).includes(".");
}

//FIX DECIMAL PLACES
function fixedDecimal(n) {
	if (checkDecimal(n)) {
		const numberString = String(n);
		return ((numberString.substring(numberString.indexOf('.')+1)).length > 10) 
    ? n.toFixed(10) 
    : n;
		}
  else return n;
} 