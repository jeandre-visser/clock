
setInterval(() => {
  
  let hrs = document.getElementById('hrs');
  let mins = document.getElementById('mins')
  let secs = document.getElementById('secs')
  let ams = document.getElementById('am');
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let am = hr >= 12 ? 'PM' : 'AM';

  // 24 hr to 12 hr clock conversion
  if (hr > 12) {
    hr = hr - 12
  };
  
  hr = (hr < 10) ? '0' + hr : hr;
  min = (min < 10) ? '0' + min : min;
  sec = (sec < 10) ? '0' + sec : sec;
  
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
})
