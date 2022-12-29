const swiper = new Swiper('.swiper', {
  spaceBetween: 20,

  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },

  //Количество слайдов на странице

  // slidesPerView: 3,

  //Адаптив

  breakpoints: {
    310: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },

    550: {
      slidesPerView: 2.7,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
    },

    1300: {
      slidesPerView: 4,
    },

    1500: {
      slidesPerView: 5,
    },
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
