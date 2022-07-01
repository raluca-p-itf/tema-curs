let popupCloseButton = document.querySelector('.closeButton > span');


let popupClose = function () {
    // hide the popup
    let tablePopup = document.querySelector('.table');
    tablePopup.style.display = 'none';
};


popupCloseButton.addEventListener('click', popupClose);


let showPopup = document.querySelector('.btn');


let popupOpen = function () {
    // show the popup
    let tablePopup = document.querySelector('.table');
    tablePopup.style.display = 'block';
};


showPopup.addEventListener('click', popupOpen);
