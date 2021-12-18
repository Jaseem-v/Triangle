var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        990: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 60,
        }
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});

