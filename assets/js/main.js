//declare
var slideIndex = 0
//function
function showSlide(n,listSlide,dot) {
    var dots = document.getElementsByClassName(dot);
    var slides = document.getElementsByClassName(listSlide);
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
        slides[i].className = slides[i].className.replace(" show-content","");
    }
    slides[n].className += ' show-content';
    dots[n].className += " active";
}
showSlide(slideIndex,'slider__img','dot__icon');
showSlide(slideIndex,'features__content','features__dot__icon');
showSlide(slideIndex,'works__pictures__item','works__list__item');
//toggle navbar
function toggleMenu() {
    var menu = document.getElementsByClassName('list__menu');
    var tabMenu = document.getElementsByClassName('burger');
    tabMenu[0].classList.toggle('change');
    menu[0].classList.toggle('show-list');
}
function wrapBox(indexImg) {
    var wrap = document.getElementsByClassName('close-modal')[0];
    // var modal = document.getElementsByClassName('modal-dialog')[0];
    var bgImg =     document.getElementsByClassName('bg--img')[0];
    switch (indexImg) {
        case 1 :
            bgImg.className+= ' bg--img-01';
            break;
        case 2:
            bgImg.className+= ' bg--img-02';
            break;
        case 3:
            bgImg.className+= ' bg--img-03';
            break;
        case 4:
            bgImg.className+= ' bg--img-04';
            break;
        case 5:
            bgImg.className+= ' bg--img-05';
            break;
        case 6:
            bgImg.className+= ' bg--img-06';
            break;
        case 7:
            bgImg.className+= ' bg--img-07';
            break;
        case 8:
            bgImg.className+= ' bg--img-08';
            break;
    }
    wrap.addEventListener('click',function (){
        bgImg.classList.remove(`bg--img-0${indexImg}`);
    })
}
$(document).ready(function (){
    $(window).scroll(function (e){
        const scroll_top = document.documentElement.scrollTop;
        var slide_height = $('.slider').innerHeight();
        var move_top = document.getElementsByClassName('move__top')[0];
        var nav = document.getElementsByClassName('nav')[0];
        if(scroll_top >= slide_height) {
            nav.classList.add('nav-active');
            move_top.style.display = "block";
        }
        else {
            nav.classList.remove('nav-active');
            move_top.style.display =" none";
        }
        move_top.addEventListener('click',function () {
            window.scrollTo({
                top:0,
                behavior: "smooth",
            })
        })
    })
    //counter--------
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    //stick----------
    $('.team__slide').slick({
        infinite: true,
        dots: true,
        arrows:false,
        // speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})

