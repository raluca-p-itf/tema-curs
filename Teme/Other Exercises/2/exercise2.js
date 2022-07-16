let inputNumbers = function(length, selectClass) {
    for (let i=0; i<length; i++) {
        let numbersBox = document.querySelector(selectClass)
        let addNumbers = document.createElement('option');
        addNumbers.innerHTML = (i+1);
        numbersBox.appendChild(addNumbers);
        addNumbers.classList.add("dropdown-item");
    }
}

inputNumbers(31, '.daySelection');
inputNumbers(12, '.monthSelection');

let inputNumbersForYears = function(year, selectClass) {
    for (let i=year-1; i>=1951; i--) {
        let numbersBox = document.querySelector(selectClass)
        let addNumbers = document.createElement('option');
        addNumbers.innerHTML = (i+1);
        numbersBox.appendChild(addNumbers);
        addNumbers.classList.add("dropdown-item");
    }
}

let currentYear = (moment().format('Y'));

inputNumbersForYears(currentYear, '.yearSelection');


let daySelection = document.querySelector('.daySelection');
let dayResult = document.querySelector('.daySpan');
daySelection.addEventListener('change', () => {
    dayResult.innerText = daySelection.options[daySelection.selectedIndex].value;
});

let monthSelection = document.querySelector('.monthSelection');
let monthResult = document.querySelector('.monthSpan');
monthSelection.addEventListener('change', () => {
    monthResult.innerText = monthSelection.options[monthSelection.selectedIndex].value;
});

let yearSelection = document.querySelector('.yearSelection');
let yearResult = document.querySelector('.yearSpan');
yearSelection.addEventListener('change', () => {
    yearResult.innerText = yearSelection.options[yearSelection.selectedIndex].value;
});


daySelection.addEventListener('change', () => {
    console.log(daySelection.options[daySelection.selectedIndex].value);
});

monthSelection.addEventListener('change', () => {
    console.log(monthSelection.options[monthSelection.selectedIndex].value);
});

yearSelection.addEventListener('change', () => {
    console.log(yearSelection.options[yearSelection.selectedIndex].value);
});





let userWeekDay = moment('2022-07-15').format('dddd'); 
console.log(userWeekDay);