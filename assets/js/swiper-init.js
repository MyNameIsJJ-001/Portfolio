// Swiper initializations
const common = {
  slidesPerView: 1.2,
  spaceBetween: 16,
  pagination: { el: '.swiper-pagination', clickable: true },
  breakpoints: {
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 }
  }
};

const mySwiper = new Swiper('.mySwiper', common);
const certSwiper = new Swiper('.certSwiper', common);
const testimonialSwiper = new Swiper('.testimonialSwiper', {
  ...common,
  autoplay: { delay: 3500, disableOnInteraction: false }
});
