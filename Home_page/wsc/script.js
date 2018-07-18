/* CountDown JavaScript for event goes here*/

function countDown(){
  let now = new Date(),
      eventDate = new Date(2018, 08, 01),
      currentTime = now.getTime(),
      eventTime = eventDate.getTime(),
      remTime = eventTime - currentTime,
      s = Math.floor(remTime/1000),
      m = Math.floor(s/60),
      h = Math.floor(m/60),
      d = Math.floor(h/24);

      h %= 24;
      m %= 60;
      s %= 60;

      h = (h < 10) ? "0"+ h : h;
      m = (m < 10) ? "0"+ m : m;
      s = (s < 10) ? "0"+ s : s;

      document.getElementById("days").textContent = d;
      document.getElementById("hours").textContent = h;
      document.getElementById("minutes").textContent = m;
      document.getElementById("seconds").textContent = s;

      setInterval(countDown , 1000);

}

countDown();

/* Slider js code*/

'use strict'

$(function(){

let animationSpeed = 1500,
    pause = 4000,
    $slider = $('#sliderHero'),
    $slideContainer = $slider.find('.slidesHero'),
    $slides = $slideContainer.find('.slideHero'),
    currentSlide = 1,
    interval;
      function startSlider(){
        interval = setInterval(function(){
          $('#sliderHero .slidesHero').animate({'margin-left': '-=100vw'}, animationSpeed, function(){
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

/* JS for tab panel for about section */

var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");

var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex, colorCode){
  tabButtons.forEach(function(node){
    node.style.backgroundColor ="";
    node.style.color="";
  });
  tabButtons[panelIndex].style.backgroundColor=colorCode;
  tabButtons[panelIndex].style.color="#000";

  tabPanels.forEach(function(node){
    node.style.display="none";
  });
  tabPanels[panelIndex].style.display ="block";
  tabPanels[panelIndex].style.backgroundColor =colorCode;
}

showPanel(0, '#fff');

/* JS for tab panel for scedule section */

var tabButtonsEvent = document.querySelectorAll(".tabContainerEvent .buttonContainerEvent  button");

var tabPanelsEvent = document.querySelectorAll(".tabContainerEvent  .tabPanelEvent");

function showPanelEvent(panelIndex, colorCode){
  tabButtonsEvent.forEach(function(node){
    node.style.backgroundColor ="";
    node.style.color="";
  });
  tabButtonsEvent[panelIndex].style.backgroundColor=colorCode;
  tabButtonsEvent[panelIndex].style.color="#000";

  tabPanelsEvent.forEach(function(node){
    node.style.display="none";
  });
  tabPanelsEvent[panelIndex].style.display ="block";
  tabPanelsEvent[panelIndex].style.backgroundColor =colorCode;
}

showPanelEvent(0, '#fff');

/* Function for Counting number of attendees*/

let counter = document.getElementById('count').innerText;
let initial = counter - 1000;

function counting(){
  if(initial <= counter){
    setTimeout(function () {
      document.getElementById('count').innerText = initial;
      initial +=11;
      counting();
    }, 30);
  }else{
    setTimeout(function () {
      document.getElementById('count').innerText = counter;
    }, 30);
  }
}
counting();
