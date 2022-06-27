// Tema obligatorie si simpla :)

let squareButton = document.querySelector('#theSquare');

let moveSquare = function() {
    squareButton.classList.toggle('topLeft');
    squareButton.classList.toggle('bottomRight');
}

squareButton.addEventListener('click', moveSquare);