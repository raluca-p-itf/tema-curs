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

                // cell1 won't be created with insertCell
                // insertCell doesn't support th element (only td)
                // creating it like this, will help us to display the text with bold
                // also, we create and append cell1 first, and then we take care of the other cells so they will be displayed in order
                let cell1 = document.createElement('th');
                row.appendChild(cell1);
                cell1.innerHTML = i+1;

                let cell2 = row.insertCell();
                let cell3 = row.insertCell();
                let cell4 = row.insertCell();
                let cell5 = row.insertCell();

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