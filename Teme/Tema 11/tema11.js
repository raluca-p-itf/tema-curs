let spaceXMap = L.map('theSpaceXMap').setView([30.5, 30.5], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 2,
    attribution: '© OpenStreetMap'
}).addTo(spaceXMap);


axios
    .get('https://api.spacexdata.com/v4/launchpads')
    .then(function (response) {
        // handle success
        console.log(response);

        let launchpadsData = response.data;
        
        for (let i = 0; i < launchpadsData.length; i++) {
            
            let circle = L.circle([launchpadsData[i].latitude, launchpadsData[i].longitude], {
                color: 'yellow',
                fillColor: 'yellow',
                fillOpacity: 0.3,
                radius: 500000
            }).addTo(spaceXMap);

        }

    })
    
    .catch(function (error) {
        // handle error
        console.log(error);
    })
;