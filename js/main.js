$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.small-header').toggleClass('height-expand');
    });
    $(".dining-menu .dropdown-menu .nav-link").click(function(){
        var x = $(this).text();
        document.getElementById("dropdown-name").innerHTML = x;
    });

    $(".owl-carousel").owlCarousel();
    
});