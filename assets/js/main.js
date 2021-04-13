//declare
var slideIndex = 0
//function
$(document).ready(function (){
    $(window).scroll(function (e){
        const scroll_top = document.documentElement.scrollTop;
        var slide_height = $('.slider').innerHeight();
        var move_top = document.getElementsByClassName('move__top')[0];
        var header = document.getElementsByClassName('header')[0];
        if(scroll_top >= slide_height) {
            header.classList.add('nav-active');
            move_top.style.display = "block";
        }
        else {
            header.classList.remove('nav-active');
            move_top.style.display =" none";
        }
        move_top.addEventListener('click',function () {
            window.scrollTo({
                top:0,
                behavior: "smooth",
            })
        })
    })
    $('.btn-works').click(function() {
        var dataAttr = $(this).attr('data-filter');
        if (dataAttr == 'all') {
            $('.box').show(1000);
        }
        else {
            $('.box').not('.'+dataAttr).hide(1000);
            $('.box').filter('.'+dataAttr).show(1000);
        }
    })
    $('li').click(function() {
        $(this).addClass(' works-active').siblings().removeClass(' works-active');
    })
    //counter--------
    $(window).scroll(function (){
        $('.counter').each(function() {
            var $this = $(this), countTo = $this.attr('data-count');
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $({ countNum: $this.text()}).animate({
                        countNum: countTo
                    },
                    {
                        duration: 5000,
                        easing:'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }
                    });
            }
        });
    })
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
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 631,
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
showSlide(slideIndex,'features__slider__content','features__dot__icon');
//toggle navbar
function toggleMenu() {
    var menu = document.getElementsByClassName('menu__bar');
    var tabMenu = document.getElementsByClassName('burger');
    tabMenu[0].classList.toggle('change');
    menu[0].classList.toggle('show-list');
}
function wrapBox(indexImg) {
    var wrap = document.getElementsByClassName('close-modal')[0];
    var bgImg = document.getElementsByClassName('bg--img')[0];
    var modal = document.getElementsByClassName('modal-dialog')[0];
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
    modal.addEventListener('click',function (){
            bgImg.classList.remove(`bg--img-0${indexImg}`);
        }
    )
}

