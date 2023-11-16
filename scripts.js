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
  const outputFld = document.querySelector('#output-field');
  //CLEAR BTN CODE
  document.querySelector('#clear-btn').addEventListener('click', () => {
    outputFld.innerText = '';
  })


  numBtn.forEach(btn => {
    btn.addEventListener('click', numInput);
  })

  function numInput(e) {
    const num1 = e.target.innerText;
    outputFld.innerText += num1;
  }

