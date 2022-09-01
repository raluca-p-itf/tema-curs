let myNumbers = [0, 8, 13, 98, 25, 68, 39, 2, 5, 7];

let randomNumbers = document.querySelector('.randomNumbers');
randomNumbers.innerHTML = 'Random numbers: ' + myNumbers;

let myNumbersArranged = myNumbers.sort(function(a, b){return a - b});

let sortedNumbers = document.querySelector('.sortedNumbers1');
sortedNumbers.innerHTML = 'Sorted numbers - 1st method: ' + myNumbersArranged;


let sortArray = function(){    
    let moreSortingNeeded = true;
    for (;moreSortingNeeded;) {
        moreSortingNeeded = false;
        for (let i = 0; i < myNumbers.length - 1; i++) {
        
            if (myNumbers[i] > myNumbers[i + 1]) {
                let copyElement = myNumbers[i];
                myNumbers[i] = myNumbers[i+1];
                myNumbers[i+1] = copyElement;

                moreSortingNeeded = true;
            }
        }
    }
    console.log(myNumbers);
    document.querySelector('.sortedNumbers2').innerHTML ="Sorted numbers - 2nd method: " + myNumbers;
}
sortArray(myNumbers);




// Bringing crew pictures and sorting them when button pressed

let allCrewMemberData = [];

let sortInHTML = function() {

    let imageDivElements = document.querySelectorAll('.allCrewImages > .pictureAndNameDiv');

    let moreSortingNeeded = true;
    for (;moreSortingNeeded;) {
        moreSortingNeeded = false;
        for (let i = 0; i < imageDivElements.length - 1; i++) {

            let currentCrewElem = imageDivElements[i];
            let nextCrewElem = imageDivElements[i + 1];
        
            if (currentCrewElem.firstChild.innerHTML > nextCrewElem.firstChild.innerHTML) {
                let copyImageUrl = currentCrewElem.style.backgroundImage;
                let copyName = currentCrewElem.firstChild.innerHTML;

                currentCrewElem.style.backgroundImage = nextCrewElem.style.backgroundImage;
                currentCrewElem.firstChild.innerHTML = nextCrewElem.firstChild.innerHTML;

                nextCrewElem.style.backgroundImage = copyImageUrl;
                nextCrewElem.firstChild.innerHTML = copyName;

                moreSortingNeeded = true;
            }
        }
    }
};

axios
    .get('https://api.spacexdata.com/v4/crew')
    .then(function (response) {
        console.log(response);

        allCrewMemberData = response.data;

        let bringAllMembersPicturesAndNames = function() {
            for (let i = 0; i < response.data.length; i++) {

                let allCrewImagesDiv = document.querySelector('.allCrewImages');

                let memberPicture = document.createElement('img');
                memberPicture.innerHTML = response.data[i].image;
                memberPicture.setAttribute('src', response.data[i].image);

                let memberName = document.createElement('div');
                memberName.innerHTML = response.data[i].name;
                memberName.classList.add('memberName');
                
                let divForPicture = document.createElement('div');
                divForPicture.classList.add('pictureAndNameDiv');
                divForPicture.style.backgroundImage = `url(${response.data[i].image})`;
                divForPicture.appendChild(memberName);

                allCrewImagesDiv.appendChild(divForPicture);

            }
        }

        bringAllMembersPicturesAndNames();
        
        document.querySelector('.sortButton').addEventListener('click', sortInHTML);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
;