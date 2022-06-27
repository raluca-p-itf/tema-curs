// Tema obligatorie si simpla :)

// 1. Moving a square on click

let squareButton = document.querySelector('#theSquare');


// a. initial position of the square
let initialSquare = function() {
    let squareButton = document.querySelector('#theSquare');
    // squareButton.classList.add('initialSquare');
    squareButton.style.position = 'fixed';
    squareButton.style.top = '50px';
    squareButton.style.left = '50px';
}

initialSquare();


// b. moving position of the square on click (event)
let moveSquare = function() {
    let squareButton = document.querySelector('#theSquare');
    squareButton.style.position = 'fixed';
    // squareButton.style.bottom = '50px';
    // squareButton.style.right = '50px';
    squareButton.style.removeProperty('top');
    squareButton.style.removeProperty('left');
}

squareButton.addEventListener('click', moveSquare);