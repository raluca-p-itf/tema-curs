// Tema 9

// creating an empty array
let dates = [];


// setting the start date and the current date
let startDate = moment('2021-07-01');
let currentDate = moment();


// function that calculates every 6 days
let getDaysBetweenDates = function() {

    let now = startDate.clone();

    while (now.isSameOrBefore(currentDate)) {
        dates.push(now.format('ddd, MMMM D, YYYY'));
        now.add(6, 'days');
    }

    return dates;
};


// calling the function and print the array to console
let datesList = getDaysBetweenDates();
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