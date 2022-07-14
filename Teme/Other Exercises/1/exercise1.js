// returns a RANDOM number between 0 and 1 each time it’s called
console.log(Math.random());

// rounding down
console.log(Math.floor(3.7463463));


// random shopping list generator

let generateButton = document.querySelector('.generateListButton');

let clickOnGenerateButton = function() {
    let food = ['FISH', 'ORANGES', 'BREAD', 'MILK', 'ICECREAM', 'EGGS', 'POTATOES', 'TOMATOES'];
    let quantity = [1, 2, 3, 4, 5, 6];
    
    let randomFood = food[Math.floor(Math.random() * 8)];
    
    let randomQuantity = quantity[Math.floor(Math.random() * 6)];
    
    let randomDecision = 'Today you will have to buy ' + randomFood + '.' + '</br>' + 'The quantity will be ' + randomQuantity + '.';
    
    let displayShoppingList = document.querySelector('.randomShoppingList');
    displayShoppingList.innerHTML = randomDecision;
};

generateButton.addEventListener('click', clickOnGenerateButton);

