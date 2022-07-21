// Tema 9

// creating an empty array
let dates = [];


// setting the start date and the current date
let startDate = moment('2021-07-01');
let currentDate = moment();


// function that calculates every 6 days USING WHILE
// let getDaysBetweenDates = function() {

//     let cloningDates = startDate.clone();

//     while (cloningDates.isSameOrBefore(currentDate)) {
//         dates.push(cloningDates.format('ddd, MMMM D, YYYY'));
//         cloningDates.add(6, 'days');
//     }

//     return dates;
// };


// function that calculates every 6 days USING FOR
// let getDaysBetweenDates = function() {

//     let cloningDates = startDate.clone();

//     for (;cloningDates.isSameOrBefore(currentDate);) {
//         dates.push(cloningDates.format('ddd, MMMM D, YYYY'));
//         cloningDates.add(6, 'days');
//     }

//     return dates;
// };


// build table
// for (let i=0; i<dates.length; i++) {

//     let tableBody = document.querySelector('.tableBody');

//     let row = document.createElement('tr');

//     let numberCell = document.createElement('th');
//     numberCell.classList.add("numberCell");

//     let dataCell = document.createElement('td');
//     dataCell.classList.add("dataCell");

//     row.appendChild(numberCell);
//     row.appendChild(dataCell);

//     numberCell.innerHTML = [i+1];
//     dataCell.innerHTML = dates[i];

//     tableBody.appendChild(row);
// };


// a single function where i used FOR for both getting every 6 days and for building the table
let getDaysBetweenDates = function() {

    let cloningDates = startDate.clone();

    for (let i=0; cloningDates.isSameOrBefore(currentDate); i++) {
        dates.push(cloningDates.format('ddd, MMMM D, YYYY'));
        cloningDates.add(6, 'days');
        
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

    }

    return dates;

};


// separate function that brings only the current date
let addCurrentDate = function() {

    dates.push(currentDate.format('ddd, MMMM D, YYYY'));

}


// calling both functions and print the arrays to console
let datesList = getDaysBetweenDates();
addCurrentDate();
console.log(datesList);