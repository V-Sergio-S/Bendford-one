import Swiper from 'swiper/bundle';


const benefits__swiper = new Swiper('.swiper--benefits', {
    centeredSlides: true,
    effect: "coverflow",
    speed: 1000,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false
    },
});

const comments__swiper = new Swiper(".swiper--comments", {
    slidesPerView: 3,
    navigation: {
        nextEl: ".comments__arrow--next",
        prevEl: ".comments__arrow--prev",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
        },
        "@0.95": {
            slidesPerView: 1,
        },
        "@1.25": {
            slidesPerView: 2,
        },
        "@1.75": {
            slidesPerView: 3,
        },
    },
});

