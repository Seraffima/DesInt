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
const num_buttons = document.querySelectorAll('.calcButN');
const op_buttons = document.querySelectorAll('.calcButO');
const dot_button = document.querySelectorAll('.calcButD');
const del_button = document.querySelectorAll('.calcButB');
const res_button = document.querySelectorAll('.calcButR');
const eq_button = document.querySelectorAll('.calcButE');
let num1 = '';
let num2 = '';
let operator = '';
let result = '';
let opIndex = 0;
let history = new History(0);

op_buttons.forEach(button => button.disabled = true);
eq_button.forEach(button => button.disabled = true);
del_button.forEach(button => button.disabled = true);

function addNumber(num) {
    if (operator === '') {
        num1 += num;
        inputDisplay.value = num1;
        op_buttons.forEach(button => button.disabled = false);
        del_button.forEach(button => button.disabled = false);
    } else {
        num2 += num;
        inputDisplay.value = num2;
        op_buttons.forEach(button => button.disabled = false);
        eq_button.forEach(button => button.disabled = false);
        del_button.forEach(button => button.disabled = false);
    }
}

function addOperator(op) {
    if (inputDisplay.value === '0') {
        return;
    } else if (operator === '') {
        subDisplay.value = num1 + ' ' + op;
        inputDisplay.value = '0';
        op_buttons.forEach(button => button.disabled = true);
        dot_button.forEach(button => button.disabled = false);
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
    del_button.forEach(button => button.disabled = true);
    dot_button.forEach(button => button.disabled = true);
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
    num1 = result;
    num2 = '';
    operator = '';
    opIndex++;
}

function reset() {
location.reload();
   /* inputDisplay.value = '0';
    subDisplay.value = '';
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    op_buttons.forEach(button => button.disabled = true);
    del_button.forEach(button => button.disabled = true);
    eq_button.forEach(button => button.disabled = true);
    */
}

function dot(){
    if (operator === '') {
        if (!num1.includes('.')) {
            num1 += '.';
            inputDisplay.value = num1;
            dot_button.forEach(button => button.disabled = true);
        }
    } else {
        if (!num2.includes('.')) {
            num2 += '.';
            inputDisplay.value = num2;
            dot_button.forEach(button => button.disabled = true);
        }
    }
    }

function del() {
    if (operator === '') {
        num1 = num1.slice(0, -1);
        inputDisplay.value = num1;
    } else {
        num2 = num2.slice(0, -1);
        inputDisplay.value = num2;
    }
}