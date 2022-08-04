let launchpadsMap = L.map('launchpadsMap').setView([30.5, 30.5], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 0,
    attribution: '© OpenStreetMap'
}).addTo(launchpadsMap);


axios
    .get('https://api.spacexdata.com/v4/launchpads')
    .then(function (response) {
        // handle success
        console.log(response);

        let launchpadsData = response.data;
        
        for (let i = 0; i < launchpadsData.length; i++) {
            L.circleMarker([launchpadsData[i].latitude, launchpadsData[i].longitude], {
                radius: 25, 
                color: 'yellow'
            }).addTo(launchpadsMap)
            .bindPopup('Status: ' + response.data[i].status);  
        }

    })
    
    .catch(function (error) {
        // handle error
        console.log(error);
    })
;