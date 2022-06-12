$(document).ready(() => {



//    Typed js integration
var typed = new Typed("#typed" , {
    strings: ["A Front-end Web Developer", "A Graphic Designer", "An UI/UX Designer"],
    backSpeed: 20,
    typeSpeed: 30,
    loop: true,
});

// Navbar changing
const navbar = $('.navbar');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.addClass('navbar-active');
        $(".navbar-brand").addClass("hidden");
        $(".navbar-brand2").removeClass("hidden");
        $(".nav-link").addClass("navbar-li-active");
        if( $(window).width() < 768 ) {
            $(".bi-list").addClass("bi-list-dark");
        };
    } else {
        navbar.removeClass('navbar-active');
        $(".navbar-brand").removeClass("hidden");
        $(".navbar-brand2").addClass("hidden");
        $(".nav-link").removeClass("navbar-li-active");
        if( $(window).width() < 768 ) {
            $(".bi-list").removeClass("bi-list-dark");
        };
    }
};
    


});