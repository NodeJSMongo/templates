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
