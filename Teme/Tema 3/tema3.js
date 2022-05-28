// Temă obligatorie și simplă

let premise = 'What a nice day for ';

let activity1 = 'science';

let activity2 = 'running';

let activity3 = 'learning';

console.log(premise + activity3 + ' the ' + activity1 + ' of ' + activity2 + '.');

console.log('========================================================');


// Temă obligatorie care necesită creativitate

let personName = 'Jane Smith';
let amountOfMoney = '$12.450';
let moneyLocation = ' in her bank account';
let aLot = ' is a lot of money';
let carName = ' a Toyota Yaris';
let action = ' to buy';
let dot = '.';



console.log(personName + ' has ' + amountOfMoney + moneyLocation + dot);
console.log(amountOfMoney + aLot + dot);
console.log(personName + ' plans ' + action + carName + dot);
console.log(personName + ' will use her ' + amountOfMoney + action + carName + dot);
console.log(amountOfMoney + aLot + ' for' + carName + dot);

console.log('========================================================');

console.log(amountOfMoney + aLot + dot);
console.log(amountOfMoney + aLot + ' for' + carName + dot);
console.log(personName + ' plans' + action + carName + dot);
console.log(personName + ' has ' + amountOfMoney + moneyLocation + dot);
console.log(personName + ' will use her ' + amountOfMoney + action + carName + dot);

console.log('========================================================');

console.log(personName + ' plans' + action + carName + dot);
console.log(amountOfMoney + aLot + ' for' + carName + dot);
console.log(personName + ' will use her ' + amountOfMoney + action + carName + dot);
console.log(personName + ' has ' + amountOfMoney + moneyLocation + dot);
console.log(amountOfMoney + aLot + dot);

console.log('========================================================');




let h1Element = document.getElementById('someText');
console.log(h1Element);
console.log(h1Element.innerHTML);


h1Element.innerHTML = 'Some text edited by JS';
h1Element.style.color = 'red';


let supraTitleElement = document.createElement('h4');
supraTitleElement.innerHTML = 'this is a supra-title';


h1Element.parentNode.insertBefore(supraTitleElement, h1Element);


let subtema1 = document.createElement('h1');
subtema1.innerHTML = (premise + activity3 + ' the ' + activity1 + ' of ' + activity2 + '.');
h1Element.parentNode.insertBefore(subtema1, h1Element);


let subtema2 = document.createElement('p');
subtema2.innerHTML = (personName + ' plans' + action + carName + dot);
h1Element.parentNode.insertBefore(subtema2, h1Element);




