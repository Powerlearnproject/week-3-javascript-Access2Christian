// JavaScript Fundamentals
// Variable Declarations
let str = "Hello, World!";
let num = 42;
let bool = true;

// Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// Event Listeners for Buttons
document.getElementById('addBtn').addEventListener('click', () => {
    console.log('Add: ', add(10, 5));
    document.getElementById('result').textContent = `Add: ${add(10, 5)}`;
});

document.getElementById('subtractBtn').addEventListener('click', () => {
    console.log('Subtract: ', subtract(10, 5));
    document.getElementById('result').textContent = `Subtract: ${subtract(10, 5)}`;
});

document.getElementById('divideBtn').addEventListener('click', () => {
    console.log('Divide: ', divide(10, 5));
    document.getElementById('result').textContent = `Divide: ${divide(10, 5)}`;
});

document.getElementById('multiplyBtn').addEventListener('click', () => {
    console.log('Multiply: ', multiply(10, 5));
    document.getElementById('result').textContent = `Multiply: ${multiply(10, 5)}`;
});

// DOM Manipulation
document.getElementById('changeTextBtn').addEventListener('click', () => {
    let userInput = document.getElementById('inputField').value;
    document.getElementById('displayText').textContent = userInput;
    document.getElementById('displayText').style.color = 'blue';
});

// Chart.js Integration
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
