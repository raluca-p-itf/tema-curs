axios
    .get('https://api.spacexdata.com/v4/launches')
    .then(function (response) {
        // handle success
        console.log(response);

        let allLaunchesInfo = response.data;
        console.log(allLaunchesInfo);

        for (let i = 0; i < allLaunchesInfo.length; i++) {
            let allLaunchesDates = allLaunchesInfo[i].date_local;
            console.log(allLaunchesDates);

        }

    })
    
    .catch(function (error) {
        // handle error
        console.log(error);
    })
;


let createCalendar = function(elem, year, month) {

    let mon = month - 1; // months in JS are 0..11, not 1..12
    let d = new Date(year, mon);

    let table = '<table><tr><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th></tr><tr>';

    // spaces for the first row
    // from Monday till the first day of the month
    // * * * 1  2  3  4
    // The getDay() method returns the day of the week (from 0 to 6) of a date.
    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    // <td> with actual dates
    while (d.getMonth() === mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
        table += '</tr><tr>';    
      }

      d.setDate(d.getDate() + 1);
    }

    // add spaces after last days of month for the last row
    // 29 30 31 * * * *
    if (getDay(d) !== 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    // close the table
    table += '</tr></table>';

    elem.innerHTML = table;
}


let getDay = function(date) { // get day number from 0 (monday) to 6 (sunday)
let day = date.getDay();
if (day === 0) day = 7; // make Sunday (0) the last day
  return day - 1;
}


createCalendar(calendar, 2022, 8);


let monthName = document.querySelector('.monthName');
monthName.innerHTML = 'August';


// show July
let showJuly = function() {
  createCalendar(calendar, 2022, 7);
  monthName.innerHTML = 'July';
}

let prev = document.querySelector('.prevButton');
prev.addEventListener("click", showJuly);


// show September
let showSeptember = function() {
  createCalendar(calendar, 2022, 9);
  monthName.innerHTML = 'September';
}

let next = document.querySelector('.nextButton');
next.addEventListener("click", showSeptember);