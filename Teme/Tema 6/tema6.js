// Tema obligatorie si simpla :)

// 1.
let firstButton = document.querySelector('#button1');

let clickOnFirstButton = function() {
    alert('The first button was pressed');
};

firstButton.addEventListener('click', clickOnFirstButton);



// 2. 
let secondButton = document.createElement('button');
secondButton.classList.add('button2');
secondButton.innerText = 'Second';

document.body.appendChild(secondButton);

let clickOnSecondButton = function() {
    alert('The second button was pressed');
};

secondButton.addEventListener('click', clickOnSecondButton);



// 3. 
let startButton = document.createElement('button');
secondButton.classList.add('button3');
startButton.innerText = 'Start!';
document.body.appendChild(startButton);


// creating step 1 button
let step1Button = document.createElement('button');

let step1 = function() {
    step1Button.innerText = 'Step 1';
    document.body.appendChild(step1Button);
};

startButton.addEventListener('click', step1, {once: true});


// creating step 2 button
let step2Button = document.createElement('button');

let step2 = function() {
    step2Button.innerText = 'Step 2';
    document.body.appendChild(step2Button);
};

step1Button.addEventListener('click', step2, {once: true});


// creating step 3 button
let step3Button = document.createElement('button');

let step3 = function() {
    step3Button.innerText = 'Step 3';
    document.body.appendChild(step3Button);
};

step2Button.addEventListener('click', step3, {once: true});


// creating step 4 button
let step4Button = document.createElement('button');

let step4 = function() {
    step4Button.innerText = 'Step 4';
    document.body.appendChild(step4Button);
};

step3Button.addEventListener('click', step4, {once: true});


// creating step 5 button
let step5Button = document.createElement('button');

let step5 = function() {
    step5Button.innerText = 'Step 5';
    document.body.appendChild(step5Button);
};

step4Button.addEventListener('click', step5, {once: true});


// event when pressing step 5 button
let endOfButtons = function() {
    alert('You have reach the end, there are no more buttons');
};

step5Button.addEventListener('click', endOfButtons, {once: true});



// Tema obligatorie ce necesita creativitate :)

// 1.


// let newButtonFunction = function() {
//     let imageButton = document.createElement('button');
//     imageButton.innerText = 'Open';
//     document.body.appendChild(imageButton);
//     imageButton.addEventListener('click', newButtonFunction);
// }

// newButtonFunction();


let coloursFunction = function() {
    let colours = document.createElement('button3');
    colours.innerHTML = 'Colours';
    document.body.appendChild(colours);
    // redButton.addEventListener('click', action);
    return colours;
}

coloursFunction();

let createButton = function(name, action) {
    let button = document.createElement('button');
    button.innerHTML = name;
    button.addEventListener('click', action);
    return button;
};





let action2 = function() {
    let b3 = createButton('Violet', null);
    document.body.appendChild(b3);
};
let action1 = function() {
    let b2 = createButton('Orange', action2);
    document.body.appendChild(b2);
};


let b1 = createButton('Red', action1);
document.body.appendChild(b1);












