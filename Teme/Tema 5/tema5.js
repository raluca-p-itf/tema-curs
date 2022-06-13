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


// 2. Palindrome + index of palindrome

let theString = prompt('Enter a number to check if Palindrome')

let palindromeFunction = function() {
    let theStringLength = theString.length;
    for (let i=0; i<theStringLength/2; i++) {
        if (theString[i] === theString[theStringLength - 1 - i]) {
        } else {
            return alert ('It is NOT a Palindrome');
        }
    }
    return alert ('It is a Palindrome');
}

palindromeFunction();


let indexOfPalindromeFunction = function() {
    let insertIndex = prompt('Your number is: ' + theString + '.' + ' Choose an index and the value of it will be returned.');
    if (
        !isNaN(parseInt(insertIndex))
        &&
        insertIndex <= theString.length - 1
        &&
        insertIndex >= 0
    ) {
        let palindromeIndex = theString.charAt(insertIndex);
        return alert ('The value of your index is: ' + palindromeIndex);
    } else {
        alert ('There is no value for this index.')
    }
}

indexOfPalindromeFunction();


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

// 1. The factorial of a number

let factorial = function (a) {
    if (Math.ceil(a) === a && Math.floor(a) === a && a>= 0) {
        for (let i=a-1; i>=1; i--) {
            a = a * i;
        }
        return console.log(a);
    }
    else {
        console.log(-1);
    }
}

factorial(6); // 120


// 2. Function: addition / multiplication at one call

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


// 3. Object with personal data and function attributes

// a.
let person = {
    firstName: 'Mihai',
    lastName: 'Popescu',
    sex: 'm',
    writePoliteNameToConsole: function () {
        let prefix = 'Mr. ';
        if (person.sex !== 'm') {
            prefix = 'Mrs. ';
        }
        console.log(prefix + person.firstName + ' ' + person.lastName);
    }
};

person.writePoliteNameToConsole();

// b. 
let personalData = {
    firstName: 'Anna',
    lastName: 'Davies',
    age: 16,
    glasses: true,
    eyePain: true,
    headaches: true,
    blurryVision: true,
    personDescription: function() {
        let morePersonalData = {
            sex: 'female',
            height: '160 cm',
            weight: 62,
            hairColour: 'blonde',
            eyeColour: 'blue',
            getProfile: function() {
                let weight = this.weight;
                return {
                    statement: this.sex + ' ' + this.height + ' ' + this.weight,
                    isSkinny: function() {
                        if (weight < 45) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                };
            }
        };
        return morePersonalData;
    },
    ophthalmologicalConsultation: function() {
        let decision1 = this.firstName + ' ' + this.lastName + ',' + ' we recommend you an ophthalmological consultation and maybe change your glasses.'
        if (personalData.glasses === true) {
            if (this.eyePain === true || this.headaches === true || this.blurryVision === true) {
                if (personalData.age >= 18) {
                    console.log(decision1);
                }
                else {
                    console.log (decision1 + ' Please come at the appointment with one of your parents.')
                }
            }

            else {
                console.log(this.firstName + ' ' + this.lastName + ',' + ' you can still wear your glasses.')
            }
        }

        if (personalData.glasses === false) {
            let decision2 = this.firstName + ' ' + this.lastName + ',' + ' we recommend you an ophthalmological consultation. It is a chance for you to need glasses.'
            if (this.eyePain === true && this.headaches === true || this.blurryVision === true) {
                if (personalData.age >= 18) {
                    console.log(decision2);
                }
                else {
                    console.log (decision2 + ' Please come at the appointment with one of your parents.')
                }
            }

            else {
                console.log(this.firstName + ' ' + this.lastName + ',' + ' you do not need an ophthalmological consulation.')
            }
        }
    }  
}

console.log(
    personalData.personDescription()
);
console.log(
    personalData.personDescription().height
);
console.log(
    personalData.personDescription().getProfile().isSkinny()
);

personalData.ophthalmologicalConsultation();


// 4. Object with function attributes only - with chaining

// let objectWithFunctions = {
//     politeName: person.writePoliteNameToConsole(),
//     personDescription: personalData.personDescription(),
//     medicalConsultation: personalData.ophthalmologicalConsultation()
// }

// objectWithFunctions()

// console.log(person.writePoliteNameToConsole());
// console.log(objectWithFunctions.personDescription);
// console.log(objectWithFunctions.medicalConsultation);
// console.log(objectWithFunctions);