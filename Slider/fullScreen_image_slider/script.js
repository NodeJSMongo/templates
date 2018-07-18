//declare all the varibales

let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

//create reset function (clear all images)

function reset(){
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// function to set initial slider
function startSlide(){
  reset();
  sliderImages[0].style.display = 'block';
}

//show previous and add event listener for the left arrow
function slideLeft(){
  reset();
  sliderImages[current - 1].style.display ='block';
  current--;
}

arrowLeft.addEventListener('click', function(){
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

//show next and add event Listener for the right arrow

function slideRight(){
  reset();
  sliderImages[current + 1].style.display ='block';
  current++ ;
}

arrowRight.addEventListener('click', function(){
  if(current === sliderImages.length - 1){
    current = -1;
  }
  slideRight();
});

startSlide();
