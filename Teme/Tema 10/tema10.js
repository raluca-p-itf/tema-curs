axios
    .get('https://api.spacexdata.com/v4/crew')
    .then(function (response) {
        // handle success
        console.log(response);

        let bringCrewPhotos = function() {

            for (i=0; i<response.data.length; i++) {

                let eachCrewMemImage = response.data[i].image;
                
                let memberImage = document.createElement('img');
                memberImage.classList.add('imagesOfMembers');
                memberImage.src = (eachCrewMemImage);

                let imageBackground = document.createElement('div');
                imageBackground.classList.add('backgroundOfImages');
                imageBackground.appendChild(memberImage);

                let allImagesSpace = document.querySelector('.allImagesSpace')
                allImagesSpace.appendChild(imageBackground);

            }
        }

        bringCrewPhotos();
    })
    
    .catch(function (error) {
        // handle error
        console.log(error);
    })
;


let showSpaceXOnMap = function() {

    let spaceXMap = L.map('theSpaceXMap').setView([33.920911420962916, -118.32804123529185], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(spaceXMap);

    let mapMarker = L.marker([33.920911420962916, -118.32804123529185]).addTo(spaceXMap);
    mapMarker.bindPopup("<b>SpaceX</b>").openPopup();

}

showSpaceXOnMap();