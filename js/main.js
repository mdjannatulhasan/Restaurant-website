$(document).ready(function(){
    // $('.navbar-toggler').click(function(){
    //     $('header .small-header').toggleClass('height-expand');
    //     console.log("hhhhh");
    // });
    $(".dining-menu .dropdown-menu .nav-link").click(function(){
        var x = $(this).text();
        document.getElementById("dropdown-name").innerHTML = x;
    });
    
    $(".owl-carousel-2").owlCarousel({
        loop: true,
        margin:30,
        dots:true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3,
                autoplay:false
            }
        }
    });
});