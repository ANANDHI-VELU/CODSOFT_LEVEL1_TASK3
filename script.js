// script.js

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let operand1 = '';
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            
            if (value === 'C') {
                // Clear button
                currentInput = '';
                operator = '';
                operand1 = '';
                display.textContent = '';
            } else if (value === '=') {
                // Equals button
                if (operator && operand1) {
                    const result = calculate(parseFloat(operand1), parseFloat(currentInput), operator);
                    display.textContent = result;
                    operand1 = result;
                    currentInput = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                // Operator buttons
                if (currentInput) {
                    operand1 = currentInput;
                    currentInput = '';
                }
                operator = value;
            } else {
                // Number or decimal point buttons
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function calculate(a, b, op) {
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return b;
        }
    }
});
