//declare
var slideIndex = 0
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot__icon")
//function
function showSlide(n) {
    for ( var i = 0; i < slides.length; i++) {
        slides[i].style.display = " none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active"," ");
    }
    slides[n].style.display = "block";
    dots[n].className += " active";
}
showSlide(slideIndex);
//toggle navbar
function toggleMenu() {
    var menu = document.getElementsByClassName('navbar');
    menu[0].classList.toggle('show');
}