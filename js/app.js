require('bootstrap');
require('owl.carousel');
require('jquery');


window.$ = jQuery;


document.getElementById("year").innerHTML = new Date().getFullYear();


$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });


    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
var delay =200;
$('.skill_item').each(function(i){
    $(this).find('.progress_br').find('.progress').find('.progress-bar').delay(delay * i).animate(
        {
            
            width: $(this).find('.progress_br').find('.progress').find('.progress-bar').attr('aria-valuenow')+'%'
        }
    );
   




});


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
        $('#navbar-sc').addClass('bg-dark')
            $('#navbar-sc').slideDown();
            $('#navbar-sc2').slideUp();
    }else{

        // $('#navbar-sc').slideUp();
        $('#navbar-sc').removeClass('bg-dark', {duration:500});
        // $('#navbar-sc2').slideDown(500);
    }
    // console.log(scroll);
    // Do something
});

