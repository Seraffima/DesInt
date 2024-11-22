function handleClick(button) {
    const display = document.getElementById('display');
    display.value += button.value;
    document.getElementById('opSum').disabled = false;
    document.getElementById('opRes').disabled = false;
}

var numbersToSum = [];

function sum(){
    const display = document.getElementById('display');
    numbersToSum.push(Number(display.value));
    display.value = '';
    document.getElementById('opEq').disabled = false;
    document.getElementById('opSum').disabled = true;
    }

function result(){
        const display = document.getElementById('display');
        numbersToSum.push(Number(display.value));
        const result = numbersToSum.reduce((a, b) => a + b, 0);
        display.value = result;
        numbersToSum = [];
 }

 function reset(){
     const display = document.getElementById('display');
     display.value = '';
     numbersToSum = [];
        document.getElementById('opSum').disabled = true;
        document.getElementById('opRes').disabled = true;
        document.getElementById('opEq').disabled = true;
 }