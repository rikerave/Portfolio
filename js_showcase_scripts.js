function calculateSum(num1, num2) {
    return num1 + num2;
}

// Selecting elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateButton = document.getElementById('calculateSumButton');
const result = document.getElementById('sumResult');

// Adding an event listener to the calculate button
calculateButton.addEventListener('click', function() {
    console.log('Button clicked');
    const num1 = parseFloat(num1Input.value) || 0;
    const num2 = parseFloat(num2Input.value) || 0;
    console.log('Numbers:' , num1, num2);
    // Calculating the sum and displaying it
    const sum = calculateSum(num1, num2);
    console.log('Sum:' , sum);
    result.textContent = `Sum: ${sum}`;
});


// A function that uses a loop to sum an array of numbers
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Event listener for the 'Sum Numbers' button
document.addEventListener('DOMContentLoaded', function() {
    const sumArrayButton = document.getElementById('sumArrayButton');
    const loopResult = document.getElementById('loopResult');
    const numbersToSum = [1, 2, 3, 4, 5]; // Example array

    sumArrayButton.addEventListener('click', function() {
        const sum = sumArray(numbersToSum);
        loopResult.textContent = `The sum of the array is: ${sum}`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const conditionalButton = document.getElementById('conditionalButton');
    const conditionalResult = document.getElementById('conditionalResult');

    conditionalButton.addEventListener('click', function() {
        const number = parseInt(document.getElementById('conditionalNumber').value, 10);
        let message;
        
        // Conditional logic to determine the message
        if (isNaN(number)) {
            message = "Please enter a valid number.";
        } else if (number < 10) {
            message = "The number is less than 10.";
        } else if (number === 10) {
            message = "The number is exactly 10!";
        } else {
            message = "The number is greater than 10.";
        }

        
        conditionalResult.textContent = message;
    });
});