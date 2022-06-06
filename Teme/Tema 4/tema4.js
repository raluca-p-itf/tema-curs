// Tema obligatorie si simpla :)

// 1.
let myArray = [1, 9, 4, 2, 8, 4, 7, 2, 1, 5, 4, 4, 3, 3, 8, 9];


// 2.
for (let i = 0; i < myArray.length; i++) {
    console.log (myArray[i]);
}


console.log('------------------------------');


// 3. 
let sum = 0;
for (i = 0; i < myArray.length; i++) {
    sum += myArray[i]
    console.log(sum);
}


console.log('------------------------------');


// 4.
let counter = 0;
for (i = 0; i <= myArray.length; i++) {
    if (myArray[i] === 4) {
        counter++;
    }
}
console.log(counter);


console.log('------------------------------');



// Tema obligatorie ce necesita creativitate :)

// 1. 
let mySecondArray = [];

for (let i = 0; i < myArray.length; i++) {
    mySecondArray.push(myArray[i] - 1);
    console.log (mySecondArray[i]);
}

console.log('------------------------------');


// 2. 
for (i = 0; i < myArray.length; i++) {
    if (myArray[i-1] === myArray[i]) {
        console.log(myArray[i-1], myArray[i])
    }
}


console.log('------------------------------');


// 3. 
function mySecondArrayFunction() {
    let insertedNumber = prompt('Please provide a number between 1 and 16.');
    for (i = 0; i < mySecondArray.length; i++) {
        if (insertedNumber != null) {
            if (insertedNumber - 1 === i) {
                alert (mySecondArray[i])
            }      
        }
    }
}
mySecondArrayFunction()


// 4. 
function plusAndMinus(num) {
    if (num <=4 ) {
        subarray = [num, num+1, num+2];
        return (subarray);
    }

    if (num >4 ) {
        subarray = [num, num-1, num-2];
        return (subarray);
    }
}  

let arrayWithSubarrays = mySecondArray.map(plusAndMinus);

console.log(arrayWithSubarrays);


console.log('------------------------------');


// 5.

