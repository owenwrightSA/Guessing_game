const numberBox = document.getElementById('guess');
const feedbackBox = document.getElementById('feedback');

document.getElementById('guess').style.fontSize = "x-large";

const newNumber = Math.floor(Math.random()*100);

numberBox.addEventListener('change', checkNumber);

function checkNumber() {
    const guess = numberBox.value;
    if (guess < newNumber) {
        feedbackBox.innerText = "Too Low!";
    }
    else if (guess > newNumber) {
        feedbackBox.innerText = "Too High!";
    }
    else {
        feedbackBox.innerText = "just right!";
    }
}

const calcBox = document.getElementById('calc');
const functionBox = document.getElementById('function');
const outputBox = document.getElementById('output')

document.getElementById('calc').style.fontSize = "x-large";
document.getElementById('output').style.fontSize = "x-large";

functionBox.addEventListener('change', function1)
calcBox.addEventListener('change',function1)

function function1() {
    const number = calcBox.value;
    if( functionBox.value == "cube"){
        outputBox.innerText = number**3
    }
    else if ( functionBox.value == "square"){
        outputBox.innerText = number**2
    }
    else if ( functionBox.value == "2x+7"){
        outputBox.innerText = 2*number+7
    }
    else if ( functionBox.value == "double"){
        outputBox.innerText = number*2
    }
}