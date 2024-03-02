var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-nexts",
      prevEl: ".swiper-button-prevs",
    },
    breakpoints: {
      310: {
          slidesPerView: 1,
      },
      640: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1240: {
          slidesPerView: 2.2,
      },
  },
  });
var swipers = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    310: {
        slidesPerView: 1,
    },
    640: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1240: {
        slidesPerView: 3.1,
    },
},
  });