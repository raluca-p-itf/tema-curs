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


// Swiper for the presentation page

const swiperPresentation = new Swiper('.swiperPresentation', {
    effect: 'cards',
    perSlideOffset: {
        number: 8
    },
    perSlideRotate: {
        number: 2
    },
    rotate: {
        boolean: true
    },
    slideShadows: {
        boolean: true
    },
    transformE1: {
        CSSSelector: null
    },

    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});


// Swiper for the portofolios

const swiper = new Swiper('.artistPortofolio', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});