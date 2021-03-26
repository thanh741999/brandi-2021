//declare
var slideIndex = 0
//function
function showSlide(n,listSlide,dot) {
    var dots = document.getElementsByClassName(dot);
    var slides = document.getElementsByClassName(listSlide);
    // for ( var i = 0; i < slides.length; i++) {
    //     slides[i].style.display = " none";
    // }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
        slides[i].className = slides[i].className.replace(" show-content","");
    }
    slides[n].className += ' show-content';
    dots[n].className += " active";

}
showSlide(slideIndex,'slider__img','dot__icon');
showSlide(slideIndex,'features__content','features__dot__icon');
//toggle navbar
function toggleMenu() {
    var menu = document.getElementsByClassName('navbar');
    var tabMenu = document.getElementsByClassName('toggleMenu');
    tabMenu[0].classList.toggle('change');
    menu[0].classList.toggle('show');
}
    $("move").on('click',function (even) {
        console.log('aaaa');
        $("html,body").animate({
            scrollTop: $("features").offset().top},'slow');
    });
// function moveTo() {
//     document.getElementsByClassName('move')[0].addEventListener('click',function (){
//         console.log(document.getElementsByClassName('move')[0])
//         console.log(document.getElementsByTagName("body")[0]);
//         // document.getElementsByTagName("html")[0].scrollTo(0,1000)});
// })