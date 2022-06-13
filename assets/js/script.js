// Loader
setTimeout(loader , 1200);
    function loader() {
        $(".loader").fadeOut("slow");
    }

$(document).ready(() => {


//    Typed js integration
var typed = new Typed("#typed" , {
    strings: ["","A Front-end Web Developer", "A Graphic Designer", "An UI/UX Designer"],
    backSpeed: 30,
    backDelay: 1300,
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

// Nav hide after click
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

//Portfolio buttons 
if( $(window).width() < 1000 ) {
    $(".port-btns").removeClass("hidden");
};


    


});
