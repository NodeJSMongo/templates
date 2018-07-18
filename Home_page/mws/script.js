'use strict'

$(function(){

let animationSpeed = 1500,
    pause = 4000,
    $slider = $('#slider'),
    $slideContainer = $slider.find('.slides'),
    $slides = $slideContainer.find('.slide'),
    currentSlide = 1,
    interval;
      function startSlider(){
        interval = setInterval(function(){
          $('#slider .slides').animate({'margin-left': '-=100vw'}, animationSpeed, function(){
            currentSlide++;
            if(currentSlide ===$slides.length){
              currentSlide = 1;
              $slideContainer.css('margin-left', 0);
            }
          });
        }, pause);
      }

      function pauseSlider(){
        clearInterval(interval);
      }
    $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);
    startSlider();
});


/* navigation menu*/

$("nav div").on('click', function(){
  $("ul").slideToggle();
  $("ul ul").css("display", "none");
});

$("ul li").on("click", function(){
  $("ul ul").slideUp();
  $(this).find("ul").slideToggle();
});

$(window).on("resize", function(){
  if($(window).width() > 568){
    $("ul").removeAttr("style");
  }
});
