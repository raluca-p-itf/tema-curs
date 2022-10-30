// Preloader : fading and then disappearing

let loader = document.getElementById('preloader');

// function type:  const functionName = () => {};
// const disappearingPreloader = () => {
//   setTimeout(() => {
//     loader.style.opacity = 0;
//     setTimeout(() => {
//         loader.style.display = 'none';
//     }, 1000);
//   }, 1000);
// }

// window.addEventListener("load", disappearingPreloader);



// Tattoo Shop location on map

let map = L.map('map').setView([50.063956, 19.9313673], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([50.063956, 19.9313673]).addTo(map);



// Swiper for the presentation page

const swiperPresentation = new Swiper('.swiperPresentation', {
    effect: 'cards',

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



// Mobile Menu

function showOrHideMenu() {
  let closeAndNavLinks = document.getElementById("closeAndNavLinks");
  if (closeAndNavLinks.style.display === "block") {
    closeAndNavLinks.style.display = "none";
  } else {
    closeAndNavLinks.style.display = "block";
  }
};