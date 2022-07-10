// Tema 9

// creating an empty array
let dates = [];


// setting the start date and the current date
let startDate = moment('2021-07-01');
let currentDate = moment();


// function that calculates every 6 days USING WHILE
let getDaysBetweenDates = function() {

    let cloningDates = startDate.clone();

    while (cloningDates.isSameOrBefore(currentDate)) {
        dates.push(cloningDates.format('ddd, MMMM D, YYYY'));
        cloningDates.add(6, 'days');
    }

    return dates;
};


// separate function that brings only the current date
let addCurrentDate = function() {

    dates.push(currentDate.format('ddd, MMMM D, YYYY'));

}


// function that calculates every 6 days USING IF AND FOR
// let getDaysBetweenDates = function() {

//     let now = startDate.clone();

//     if (now.isSameOrBefore(currentDate)) {
//         for (let i=0; i<100; i++) {
//             dates.push(now.format('ddd, MMMM D, YYYY'));
//             now.add(6, 'days');
//         }
//     }

//     return dates;
// };


// calling both functions and print the arrays to console
let datesList = getDaysBetweenDates();
addCurrentDate();
console.log(datesList);


// build table
for (let i=0; i<dates.length; i++) {

    let tableBody = document.querySelector('.tableBody');

    let row = document.createElement('tr');

    let numberCell = document.createElement('th');
    numberCell.classList.add("numberCell");

    let dataCell = document.createElement('td');
    dataCell.classList.add("dataCell");

    row.appendChild(numberCell);
    row.appendChild(dataCell);

    numberCell.innerHTML = [i+1];
    dataCell.innerHTML = dates[i];

    tableBody.appendChild(row);
};