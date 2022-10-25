const swiper = new Swiper('.swiper', {
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
    loop: true,
  
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




