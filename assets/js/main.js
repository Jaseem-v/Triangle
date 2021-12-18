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

//////////////////

$('input').focus(function () {
    $(this).parent().addClass('active');
    $('input').focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    })
});

///////////////////////////////////////
// Navbar scroll

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('#navbar').addClass('sticky')
    } else {
        $('#navbar').removeClass('sticky')

    }

});
///////////////////////////////

$(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('section').each(function (i) {
            // The number at the end of the next line is how pany pixels you from the top you want it to activate.
            if ($(this).position().top <= windscroll - -1000) {
                $('.navigation__link.active').removeClass('active');
                $('.navigation__link').eq(i).addClass('active');
            }
        });

    } else {

        $('.navigation__link.active').removeClass('active');
        $('.navigation__link:first').addClass('active');
    }

}).scroll();

//////////////////////////////////////////
// enroll btn

let enrollBtn = document.querySelector("#enroll-btn")
let model = document.querySelector(".enroll")
let modelContainer = document.querySelector(".enroll__container")
let modelOverlay = document.querySelector(".enroll__overlay")
let modelClose = document.querySelector(".model-close");

modelClose.addEventListener("click", () => {
    model.classList.remove("active")
    modelOverlay.classList.remove("active")
    modelContainer.classList.remove("active")
    document.body.classList.remove("remove-scrolling");

})

enrollBtn.addEventListener("click", () => {
    model.classList.add("active")
    modelOverlay.classList.add("active")
    modelContainer.classList.add("active")
    document.body.classList.add("remove-scrolling");
})
// console.log(enrollBtn);



const openBtn = document.querySelector(".open-btn")
const nav_list = document.querySelector(".navigation__list")
const overlay = document.querySelector(".overlay")
const navContact = document.querySelector(".nav-contact")

function mobileMenu() {
    openBtn.classList.toggle("active");
    nav_list.classList.toggle("active")
    overlay.classList.toggle("hidden")
    navContact.classList.toggle("hidden")
}

openBtn.addEventListener("click", mobileMenu)
overlay.addEventListener("click", mobileMenu)

