document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('input');
    const buttons = document.querySelectorAll('#numbers div');
    
    let currentInput = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = this.textContent;
            
            if (buttonText === 'C') {
                // Clear the display
                currentInput = '';
                display.value = '';
            } else if (buttonText === '=') {
                // Evaluate the expression
                try {
                    currentInput = eval(currentInput);
                    display.value = currentInput;
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (buttonText === '<') {
                // Handle backspace
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            } else {
                // Append the clicked button value to the current input
                currentInput += buttonText;
                display.value = currentInput;
            }
        });
    });
});
