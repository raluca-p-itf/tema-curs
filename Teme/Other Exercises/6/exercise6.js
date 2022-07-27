let allColors = [
    'blue', 
    'green',
    'orange',
    'yellow',
    'purple',
    'brown',
    'gray',
    'red',
    'olive',
    'maroon',
    'violet',
    'charcoal',
    'magenta',
    'bronze',
    'cream',
    'tan',
    'teal',
    'black',
    'mustard',
    'coral',
    'burgundy',
    'lavender',
    'mauve',
    'peach',
    'rust',
    'gold',
    'pink',
    'silver',
    'cyan'
];

let randomColor = allColors[Math.floor(Math.random() * allColors.length)];
console.log(randomColor);

let answerArray = [];

for (let i = 0; i < randomColor.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = randomColor.length;
console.log(remainingLetters);

let showProgress = document.querySelector('.underscores');
showProgress.innerHTML = answerArray.join(" ");

let warning = document.querySelector('.warning');

let chooseLetters = function() {

    for (let i = 0; i < randomColor.length; i++) {

        showProgress.innerHTML = answerArray.join(" ");

        let playerGuessCapitalOrSmallLetter = document.querySelector('#fname').value;
        let playerGuess = playerGuessCapitalOrSmallLetter.toLowerCase();

        let form = document.querySelector('.form');
        form.reset();
        
        if (playerGuess.length > 1) {
            warning.innerHTML = 'Please enter a single letter.'
        } 

        else {
            for (let j = 0; j < randomColor.length; j++) {
                if (randomColor[j] === playerGuess) {
                    answerArray[j] = playerGuess;
                    warning.innerHTML = '';
                }
            }
        }

    }

    if (answerArray.join('') === randomColor) {
        warning.innerHTML = 'Congratulations, you have guessed it!';
    }

}

let button = document.querySelector('.button');
button.addEventListener('click', chooseLetters)

let showColor = function(colorName, colorCode) {
    if (randomColor === colorName) {
        let colorHolder = document.querySelector('.colorHolder');
        colorHolder.style.backgroundColor = colorCode;
    }
}

showColor('blue', "blue");
showColor('green', "green");
showColor('orange', "orange");
showColor('yellow', "yellow");
showColor('purple', "purple");
showColor('brown', "#654321");
showColor('gray', "gray");
showColor('red', "red");
showColor('olive', "olive");
showColor('maroon', "maroon");
showColor('violet', "violet");
showColor('charcoal', "#36454F");
showColor('magenta', "magenta");
showColor('bronze', "#A97142");
showColor('cream', "#FFFDD0");
showColor('tan', "tan");
showColor('teal', "teal");
showColor('black', "black");
showColor('mustard', "#E1AD01");
showColor('coral', "coral");
showColor('burgundy', "#800020");
showColor('lavender', "#D7B4F3");
showColor('mauve', "#A17188");
showColor('peach', "#FFCBA4");
showColor('rust', "#B7410E");
showColor('gold', "gold");
showColor('pink', "pink");
showColor('silver', "silver");
showColor('cyan', "cyan");