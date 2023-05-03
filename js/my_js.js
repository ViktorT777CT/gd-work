
$(document).ready(function(){

        $(".owl-carousel").owlCarousel();

});

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    margin: 20,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        577:{
            items:2,
            nav:false
        },
        993:{
            items:3,
            nav:true,
            loop:false
        }
    }
})