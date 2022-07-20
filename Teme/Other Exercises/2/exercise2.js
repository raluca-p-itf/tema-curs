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


let yearSelection = document.querySelector('.yearSelection');

let monthSelection = document.querySelector('.monthSelection');

let daySelection = document.querySelector('.daySelection');

let confirmButton = document.querySelector('.confirmButton');

let displayData = document.querySelector('.hiddenUserDate');


let firstFunction = function() {
    confirmButton.addEventListener('click', () => {

        displayData.innerText = 
            [
                (yearSelection.options[yearSelection.selectedIndex].value),
                (monthSelection.options[monthSelection.selectedIndex].value),
                (daySelection.options[daySelection.selectedIndex].value)
            ]
        ;

        console.log(moment(displayData.textContent).format('LLLL'));

        let weekDay = document.querySelector('.weekDay');
        weekDay.innerHTML = moment(displayData.textContent).format('dddd');
        
        let showCardFunction = function(day, dayCard) {
            if (weekDay.innerHTML === day) {
                let bringCard = document.querySelector(dayCard);
                bringCard.style.display = 'block';
            }
        };

        showCardFunction('Monday', '.mondayCard');
        showCardFunction('Tuesday', '.tuesdayCard');
        showCardFunction('Wednesday', '.wednesdayCard');
        showCardFunction('Thursday', '.thursdayCard');
        showCardFunction('Friday', '.fridayCard');
        showCardFunction('Saturday', '.saturdayCard');
        showCardFunction('Sunday', '.sundayCard');

        let refresh = document.querySelector('.refresh');
        refresh.style.display = 'block';

        confirmButton.disabled = 'true';

    });

}

firstFunction();