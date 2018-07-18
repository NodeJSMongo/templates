//FUNCTION: set the direction right or left
//set the current slide
//set the next or previous slide
//look if the number of the slide hits the last one
// call the functions inside the html

function changeSlide(direction){
  let currentImg = $('.active'),
      nextImg = currentImg.next();
      prevImg = currentImg.prev();

  if(direction == 'next'){
    if(nextImg.length){
      nextImg.addClass('active');
    }else{
      $('.slider img').first().addClass('active');
    }
  }else{
    if(prevImg.length){
      prevImg.addClass('active');
    }else{
      $('.slider img').last().addClass('active');
    }
  }
  currentImg.removeClass('active');
}


//set interval for SlideShow
//change the text inside the button of the SlideShow
// call the function inside the html
let pauseSlideshow = false;

  function slideshow(caller){

    let status = $(caller).attr('value');

    if(status.indexOf('Start') > -1){
      pauseSlideshow = false;
      $(caller).attr('value', 'Pause Slideshow');
    }else{
      pauseSlideshow = true;
      $(caller).attr('value', 'Start Slideshow');
    }

    let interval = setInterval(function(){
      if(!pauseSlideshow){
        changeSlide('next');
      }else {
        clearInterval(interval);
      }
    }, 3000);
  }
