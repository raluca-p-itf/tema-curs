let map;

function initMap() {
    const myLatLng = { lat: 50.0638488, lng: 19.9314677 };
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 50.0638488, lng: 19.9314677 },
        zoom: 14,
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Inkphoric",
      });
}

window.initMap = initMap;
