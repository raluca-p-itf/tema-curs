let button = document.querySelector('.button');

let convertedText = document.querySelector('.convertedText');

let myFunction = function() {
    let enteredText = document.querySelector('.enteredText').value;

    let textOutput = '';

    for (let i=0; i<enteredText.length; i++) {

        if (enteredText[i] === 'a') {
            textOutput += '4';
        }

        if (enteredText[i] === 'e') {
            textOutput += '3';
        }

        if (enteredText[i] === 'i') {
            textOutput += '1';
        }

        if (enteredText[i] === 'o') {
            textOutput += '0';
        }

        if (enteredText[i] != 'a' && enteredText[i] !='e' && enteredText[i] !='i' && enteredText[i] !='o') {
            textOutput += enteredText[i];
        }
    }

    convertedText.innerHTML = textOutput;

    let result = document.querySelector('.result');
    result.style.display = 'block';

}

button.addEventListener('click', myFunction);


// j4v4scr1pt 1s 4w3s0m3  --  to console

var input = "javascript is awesome";
var output = "";

for (let i=0; i<input.length; i++) {

    if (input[i] === 'a') {
        output += '4';
    }

    if (input[i] === 'e') {
        output += '3';
    }

    if (input[i] === 'i') {
        output += '1';
    }

    if (input[i] === 'o') {
        output += '0';
    }

    if (input[i] != 'a' && input[i] !='e' && input[i] !='i' && input[i] !='o') {
        output += input[i];
    }

}

console.log(output)