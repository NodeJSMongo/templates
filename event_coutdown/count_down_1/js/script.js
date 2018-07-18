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


      //Now calculate the remaining hours and Seconds

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
