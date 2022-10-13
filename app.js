
setInterval(() => {
  
  let hrs = document.getElementById('hrs');
  let mins = document.getElementById('mins')
  let secs = document.getElementById('secs')
  let ams = document.getElementById('am');
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let am = hr >= 12 ? 'PM' : 'AM';

  let body = document.querySelector('body');

  // morning
  if (hr >= 5 && hr < 8) {
    body.style.backgroundColor = "#F3904F"; 
    body.style.background = "-webkit-linear-gradient(to top, #3B4371, #F3904F)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #3B4371, #F3904F)";
    body.style.color = "#FFF";
  };

  // day
  if (hr >= 8 && hr < 17) {
    body.style.backgroundColor = "#00B4DB"; 
    body.style.background = "-webkit-linear-gradient(to top, #0083B0, #00B4DB)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #0083B0, #00B4DB)";
    body.style.color = "#FFF";
  };

  // evening
  if (hr >= 17 && hr < 20) {
    body.style.backgroundColor = "#355C7D"; 
    body.style.background = "-webkit-linear-gradient(to top, #C06C84, #6C5B7B, #355C7D)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #C06C84, #6C5B7B, #355C7D)";
    body.style.color = "#FFF";
  };

  // night
  if (hr >= 20 && hr < 5) {
    body.style.backgroundColor = "#0f2027"; 
    body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #053752, #001A26)";
    body.style.color = "#FFF";
  };


  // 24 hr to 12 hr clock conversion
  if (hr > 12) {
    hr = hr - 12
  };
  
  min = (min < 10) ? '0' + min : min;

  hrs.innerHTML = hr;
  mins.innerHTML = min;
  secs.innerHTML = sec;
  ams.innerHTML = am;

  let h = document.getElementById('h');
  let m = document.getElementById('m');
  let s = document.getElementById('s');

  let hr_ball = document.querySelector('.hr_ball');
  let min_ball = document.querySelector('.min_ball');
  let sec_ball = document.querySelector('.sec_ball');

  h.style.strokeDashoffset = 566 - (566 * hr) / 12; // 12 hrs
  m.style.strokeDashoffset = 566 - (566 * min) / 60; // 60 minutes in hour
  s.style.strokeDashoffset = 566 - (566 * sec) / 60; // 60 seconds in minute

  hr_ball.style.transform = `rotate(${hr * 30}deg)`; // 360deg / 12 = 30deg
  min_ball.style.transform = `rotate(${min * 6}deg)`; // 360deg / 60 = 6deg
  sec_ball.style.transform = `rotate(${sec * 6}deg)`; 

});

