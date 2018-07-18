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
