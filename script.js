let display = document.getElementById('display');


function clearDisplay() {
    display.value = '';
}


function inputValue(value) {
    display.value += value;
}


function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}


function safeEval(expression) {
    try {
     
        if (expression.includes('/0')) {
            throw new Error("Division by zero");
        }
  
        return eval(expression);
    } catch (error) {
        return 'Error';
    }
}
