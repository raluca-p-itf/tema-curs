// Tema obligatorie si simpla

// 1. Math exercise with operations

let addition = function(a, b) {
    return (a+b); 
}

let substraction = function(a, b) {
    return (a-b);
}

let multiplication = function(a, b) {
    return (a*b);
}

let division = function(a, b) {
    return (a/b);
}

let x = prompt('Provide a number for x :     4 / x + 5 - x * (34 - x + 10) / 6 + x');

let mathExercise = function() {
    let firstDivision = division(4, parseInt(x));
    let firstOpFromParenthesis = substraction(34, parseInt(x));
    let parenthesisResult = addition(firstOpFromParenthesis, 10);
    let multiplicationBeforeParenthesis = multiplication(parseInt(x), parenthesisResult);
    let divisionAfterParenthesis = division(multiplicationBeforeParenthesis, 6);
    let firstBigAddition = addition(firstDivision, 5);
    let firstBigSubstraction = substraction(firstBigAddition, divisionAfterParenthesis);
    let finalResult = addition(firstBigSubstraction, parseInt(x));
    
    alert('Your result is :    ' + finalResult);
}

mathExercise();


// 2. Palindrome

let theString = prompt('Enter a number to check if Palindrome')

let palindromeFunction = function() {
    let theStringLength = theString.length;
    for (let i=0; i<theStringLength/2; i++) {
        if (theString[i] === theString[theStringLength - 1 - i]) {
                return alert ('It is a Palindrome');
        } else {
                return alert ('It is NOT a Palindrome');  
        }
    }
}

palindromeFunction();


// let findingNumberUsingIndex = function() {
//     let index = prompt('Enter a index')
//     for (let i=0; i<theString.length; i++) {
//         let indexOfString = theString.charAt(i);
//         if (index === indexOfString) {
//             return alert (theString.charAt(i))
//         } else {
//             alert ('invalid')
//         }
//     }
// }

// findingNumberUsingIndex();


// function mySecondArrayFunction() {
//     let insertedNumber = prompt('Please provide a number between 1 and 16.');
//     for (i = 0; i < mySecondArray.length; i++) {
//         if (insertedNumber != null) {
//             if (insertedNumber - 1 === i) {
//                 alert (mySecondArray[i])
//             }      
//         }
//     }
// }
// mySecondArrayFunction()



// 3. Longest word from a sentence

let sentence = prompt('Write a sentence')

let longestWord = function() {
    let sentenceSplit = sentence.split(' ');
    let longestWord = 0;
    for (let i=0; i<sentenceSplit.length; i++) {
        if (sentenceSplit[i].length > longestWord) {
            longestWord = sentenceSplit[i].length;
        }
    }
    return alert('Size of the longest word: ' + longestWord);
}

longestWord();


// Tema obligatorie ce necesita creativitate

// 1. 


// 2.
let array = [2, 4, 8, 1, 9, 4, 5, 5, 8, 9, 1, 3, 2];

let additionOrMultiplication = function () {
    let option = prompt('Enter x for addition or y for multiplication');
    if ( option === 'x') {
        let sum = 0;
        for (let i=0; i<array.length; i++) {
            sum += array[i];
        }
        return alert('The result of the array addition: ' + sum);
    }

    if (option === 'y') {
        let multip = 1;
        for (let i=0; i<array.length; i++) {
            multip *= array[i];
        }
        return alert('The result of the array multiplication: ' + multip);
    }

    else (
        alert ('You did not enter x or y. Try again.')
    )
}

additionOrMultiplication();

