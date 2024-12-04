class Operation {
  constructor(num1, num2, operator, result, opIndex) {
    this.num1 = num1;
    this.num2 = num2;
    this.operator = operator;
    this.result = result;
    this.opIndex = opIndex;
  }
}

class History {
  constructor(Index) {
    this.Index = Index;
    this.operations = [];
  }

  addOperation(num1, num2, operator, result, opIndex) {
    this.operations.push({ num1, num2, operator, result, opIndex });
  }

  getOperation(opIndex) {
    return this.operations[opIndex];
  }
}

function updateHistoryList() {
  const historyList = document.getElementById('historyList');
  historyList.innerHTML = ''; // Clear the list first

  history.operations.forEach(operation => {
    const listItem = document.createElement('li');
    listItem.textContent = `${operation.num1} ${operation.operator} ${operation.num2} = ${operation.result}`;
    historyList.appendChild(listItem);
  });
}

window.onload = function() {
  const inputDisplay = document.getElementById('numDisplay');
  inputDisplay.value = '0';
}

const inputDisplay = document.getElementById('numDisplay');
const subDisplay = document.getElementById('operDisplay');
let num1 = '';
let num2 = '';
let operator = '';
let result = '';
let opIndex = 0;
let history = new History(0);

function addNumber(num) {
    if (operator === '') {
        num1 += num;
        inputDisplay.value = num1;
    } else {
        num2 += num;
        inputDisplay.value = num2;
    }
}

function addOperator(op) {
    if (inputDisplay.value === '0') {
        return;
    } else if (operator === '') {
        subDisplay.value = inputDisplay.value + ' ' + op;
    } else {
        calculate();
        subDisplay.value = result + ' ' + op;
        num1 = result;
        num2 = '';
    }
    operator = op;
}

function equals() {
    calculate();
    subDisplay.value = '';
}

function calculate() {
    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
    }
    inputDisplay.value = result;
    history.addOperation(num1, num2, operator, result, opIndex);
    updateHistoryList();
    num1 = '';
    num2 = '';
    operator = '';
    opIndex++;
}

function reset() {
    inputDisplay.value = '0';
    subDisplay.value = '';
    num1 = '';
    num2 = '';
    operator = '';
}

function dot(){
    if (operator === '') {
        if (!num1.includes('.')) {
            num1 += '.';
            inputDisplay.value = num1;
        }
    } else {
        if (!num2.includes('.')) {
            num2 += '.';
            inputDisplay.value = num2;
        }
    }
    }




