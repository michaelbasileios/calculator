//BASIC OPS CODE
let num1;
let num2;
let operator;

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
  const inputField = document.querySelector('#user-input');
  const outputField = document.querySelector('#output-field');
  
  //CLEAR BTN CODE
  document.querySelector('#clear-btn').addEventListener('click', () => {
    outputField.innerText = '';
  })


  numBtn.forEach(btn => {
    btn.addEventListener('click', numInput);
  })

  function numInput(e) {
    const num1 = e.target.innerText;
    inputField.value += num1;
  }

