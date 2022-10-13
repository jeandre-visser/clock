
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

  //test
  if (hr >= 8 && hr < 17) {
    body.style.backgroundColor = "#00B4DB"; 
    body.style.background = "-webkit-linear-gradient(to top, #0083B0, #00B4DB)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #0083B0, #00B4DB)";
    body.style.color = "#FFF";
  };



  // 12am - 4am
  if (hr >= 5 && hr < 8) {
    body.style.backgroundColor = "#F3904F"; 
    body.style.background = "-webkit-linear-gradient(to top, #3B4371, #F3904F)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #3B4371, #F3904F)";
    body.style.color = "#FFF";
  };

  // 4am - 5am
  if (hr >= 20 && hr < 5) {
    body.style.backgroundColor = "#0f2027"; 
    body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #053752, #001A26)";
    body.style.color = "#FFF";
  };
  
  // 5am - 6am
  if (hr >= 20 && hr < 5) {
    body.style.backgroundColor = "#0f2027"; 
    body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #053752, #001A26)";
    body.style.color = "#FFF";
  };

  // 6am - 7am
  if (hr >= 20 && hr < 5) {
    body.style.backgroundColor = "#0f2027"; 
    body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #053752, #001A26)";
    body.style.color = "#FFF";
  };
  
  // 7am - 8am
  if (hr >= 20 && hr < 5) {
    body.style.backgroundColor = "#0f2027"; 
    body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #053752, #001A26)";
    body.style.color = "#FFF";
  };

  // 8am - 9am
  if (hr >= 20 && hr < 5) {
    body.style.backgroundColor = "#0f2027"; 
    body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #053752, #001A26)";
    body.style.color = "#FFF";
  };

  // 9am - 10am
  if (hr >= 20 && hr < 5) {
    body.style.backgroundColor = "#0f2027"; 
    body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #053752, #001A26)";
    body.style.color = "#FFF";
  };

  // 10am - 11am
  if (hr >= 20 && hr < 5) {
    body.style.backgroundColor = "#0f2027"; 
    body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #053752, #001A26)";
    body.style.color = "#FFF";
  };

    // 11am - 12pm
    if (hr >= 20 && hr < 5) {
      body.style.backgroundColor = "#0f2027"; 
      body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
      body.style.zIndex = "0";
      body.style.background =  "linear-gradient(to top, #053752, #001A26)";
      body.style.color = "#FFF";
    };
  
    // 12pm - 3pm
    if (hr >= 20 && hr < 5) {
      body.style.backgroundColor = "#0f2027"; 
      body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
      body.style.zIndex = "0";
      body.style.background =  "linear-gradient(to top, #053752, #001A26)";
      body.style.color = "#FFF";
    };

    // 3pm - 4pm
    if (hr >= 20 && hr < 5) {
      body.style.backgroundColor = "#0f2027"; 
      body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
      body.style.zIndex = "0";
      body.style.background =  "linear-gradient(to top, #053752, #001A26)";
      body.style.color = "#FFF";
    };

    // 4pm - 5pm
    if (hr >= 20 && hr < 5) {
      body.style.backgroundColor = "#0f2027"; 
      body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
      body.style.zIndex = "0";
      body.style.background =  "linear-gradient(to top, #053752, #001A26)";
      body.style.color = "#FFF";
    };

    // 5pm - 6pm
    if (hr >= 20 && hr < 5) {
      body.style.backgroundColor = "#0f2027"; 
      body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
      body.style.zIndex = "0";
      body.style.background =  "linear-gradient(to top, #053752, #001A26)";
      body.style.color = "#FFF";
    };

    // 6pm - 7pm
    if (hr >= 20 && hr < 5) {
      body.style.backgroundColor = "#0f2027"; 
      body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
      body.style.zIndex = "0";
      body.style.background =  "linear-gradient(to top, #053752, #001A26)";
      body.style.color = "#FFF";
    };

    // 7pm - 8pm
    if (hr >= 20 && hr < 5) {
      body.style.backgroundColor = "#0f2027"; 
      body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
      body.style.zIndex = "0";
      body.style.background =  "linear-gradient(to top, #053752, #001A26)";
      body.style.color = "#FFF";
    };

    // 8pm - 9pm
    if (hr >= 20 && hr < 5) {
      body.style.backgroundColor = "#0f2027"; 
      body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
      body.style.zIndex = "0";
      body.style.background =  "linear-gradient(to top, #053752, #001A26)";
      body.style.color = "#FFF";
    };

    // 9pm - 10pm
    if (hr >= 20 && hr < 5) {
      body.style.backgroundColor = "#0f2027"; 
      body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
      body.style.zIndex = "0";
      body.style.background =  "linear-gradient(to top, #053752, #001A26)";
      body.style.color = "#FFF";
    };

    // 10pm - 11pm
    if (hr >= 20 && hr < 5) {
      body.style.backgroundColor = "#0f2027"; 
      body.style.background = "-webkit-linear-gradient(to top, #0f2027, #203a43, #001A26)"; 
      body.style.zIndex = "0";
      body.style.background =  "linear-gradient(to top, #053752, #001A26)";
      body.style.color = "#FFF";
    };

    // 11pm - 12pm
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

