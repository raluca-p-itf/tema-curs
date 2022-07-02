let popupCloseButton = document.querySelector('.closeButton > span');


let popupClose = function () {
    // hide the popup
    let tablePopup = document.querySelector('.tableWindow');
    tablePopup.style.display = 'none';
};


popupCloseButton.addEventListener('click', popupClose);


let showPopup = document.querySelector('.btn');


let popupOpen = function () {
    // show the popup
    let tablePopup = document.querySelector('.tableWindow');
    tablePopup.style.display = 'block';
};


showPopup.addEventListener('click', popupOpen);


axios
    .get('https://api.spacexdata.com/v4/crew')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
;    
