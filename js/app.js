$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    merge:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center:true,
    dots: false,
    lazyLoad: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll>100){
            $('#navbar-sc').slideDown();
            $('#navbar-sc2').slideUp();
    }else{
        $('#navbar-sc').slideUp();
        $('#navbar-sc2').slideDown(500);
    }
    console.log(scroll);
    // Do something
});

