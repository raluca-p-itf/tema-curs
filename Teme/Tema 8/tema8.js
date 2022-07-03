let popupCloseButton = document.querySelector('.closeButton > span');


// hide the popup
let popupClose = function () {
    let tablePopup = document.querySelector('.tableWindow');
    tablePopup.style.display = 'none';
};

popupCloseButton.addEventListener('click', popupClose);


// show the popup
let popupOpen = function () {
    let tablePopup = document.querySelector('.tableWindow');
    tablePopup.style.display = 'block';
};

let showPopup = document.querySelector('.btn');

showPopup.addEventListener('click', popupOpen);


axios
    .get('https://api.spacexdata.com/v4/crew')
    .then(function (response) {
        // handle success
        console.log(response);

        let createRowsWithInfo = function() {
            for (i=0; i<response.data.length; i++) {
                console.log(response.data[i].name);

                let bodyTable = document.getElementById('tableBody');
                let row = bodyTable.insertRow(i);
                let cell1 = row.insertCell();
                let cell2 = row.insertCell();
                let cell3 = row.insertCell();
                let cell4 = row.insertCell();
                let cell5 = row.insertCell();

                cell1.innerHTML = i+1;
                cell2.innerHTML = response.data[i].name;
                cell3.innerHTML = response.data[i].agency;
                cell4.innerHTML = response.data[i].status;
                cell5.innerHTML = response.data[i].image;
            }
        }

        createRowsWithInfo();

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
;