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

  // 12am - 4am
  if (hr >= 0 && hr < 4) {
    body.style.background = "-webkit-linear-gradient(to top, #121138, #01001F)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #121138, #01001F)";
    body.style.color = "#FFF";
  };

  // 4am - 5am
  if (hr >= 4 && hr < 5) {
    body.style.background = "-webkit-linear-gradient(to top, #04006B, #01001F)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #04006B, #01001F)";
    body.style.color = "#FFF";
  };
  
  // 5am - 6am
  if (hr >= 5 && hr < 6) {
    body.style.background = "-webkit-linear-gradient(to top, #FF5A17, #11316B, #04006B)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #FF5A17, #11316B, #04006B)";
    body.style.color = "#FFF";
  };

  // 6am - 7am
  if (hr >= 6 && hr < 7) {
    body.style.background = "-webkit-linear-gradient(to top, #FF5A17, #D9770F, #D9940F, #1153AD)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #FF5A17, #D9770F, #D9940F, #1153AD)";
    body.style.color = "#FFF";
  };
  
  // 7am - 8am
  if (hr >= 7 && hr < 8) {
    body.style.background = "-webkit-linear-gradient(to top, #1153AD, #D9940F, #D9770F)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #1153AD, #D9940F, #D9770F)";
    body.style.color = "#FFF";
  };

  // 8am - 9am
  if (hr >= 8 && hr < 9) {
    body.style.background = "-webkit-linear-gradient(to top, #1153AD, #1565E6, #D9940F, #D9770F)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #1153AD, #1565E6, #D9940F, #D9770F)";
    body.style.color = "#FFF";
  };

  // 9am - 10am
  if (hr >= 9 && hr < 10) {
    body.style.background = "-webkit-linear-gradient(to top, #1153AD, #1565E6, #176EFF, #EE9E21)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #1153AD, #1565E6, #176EFF, #EE9E21)";
    body.style.color = "#FFF";
  };

  // 10am - 11am
  if (hr >= 10 && hr < 11) {
    body.style.background = "-webkit-linear-gradient(to top, #1153AD, #176EFF, #59B1FF)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #1153AD, #176EFF, #59B1FF)";
    body.style.color = "#FFF";
  };

  // 11am - 12pm
  if (hr >= 11 && hr < 12) {
    body.style.background = "-webkit-linear-gradient(to top, #004AFF, #176EFF, #59B1FFF)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #004AFF, #176EFF, #59B1FF)";
    body.style.color = "#FFF";
  };
  
  // 12pm - 3pm
  if (hr >= 12 && hr < 15) {
    body.style =  "--bkgClr:#004AFF, #176EFF, #314EFF, #FFF";
  };

  // 3pm - 4pm
  if (hr >= 15 && hr < 16) {
    body.style =  "--bkgClr:#004AFF, #314EFF, #176EFF";
  };

  // 4pm - 5pm
  if (hr >= 16 && hr < 17) {
    body.style.background = "-webkit-linear-gradient(to top, #004AFF, #31A6FF)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #004AFF, #31A6FF)";
    body.style.color = "#FFF";
  };

  // 5pm - 6pm
  if (hr >= 17 && hr < 18) {
    body.style.background = "-webkit-linear-gradient(to top, #3075FF, #31A6FF, #31A6FF, #FF830A)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #3075FF, #31A6FF, #31A6FF, #FF830A)";
    body.style.color = "#FFF";
  };

  // 6pm - 7pm
  if (hr >= 18 && hr < 19) {
    body.style.background = "-webkit-linear-gradient(to top, #3061FF, #3075FF, #3069FF, #31A6FF, #FF830A, #FFB419)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #3061FF, #3075FF, #3069FF, #31A6FF, #FF830A, #FFB419)";
    body.style.color = "#FFF";
  };

  // 7pm - 8pm
  if (hr >= 19 && hr < 20) {
    body.style.background = "-webkit-linear-gradient(to top, #3061FF, #3075FF, #3069FF, #FF830A, #FFA31B, #FFB419)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #3061FF, #3075FF, #3069FF, #FF830A, #FFA31B, #FFB419)";
    body.style.color = "#FFF";
  };

  // 8pm - 9pm
  if (hr >= 20 && hr < 21) {
    body.style.background = "-webkit-linear-gradient(to top, #3061FF,#FF5A17, #FF830A, #FFA31B, #FFB419)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #3061FF,#FF5A17, #FF830A, #FFA31B, #FFB419)";
    body.style.color = "#FFF";
  };

  // 9pm - 10pm
  if (hr >= 21 && hr < 22) {
    body.style.background = "-webkit-linear-gradient(to top, #FFB419, #FF5A17, #2000FF, #13138F, #13138F)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #FFB419, #FF5A17, #2000FF, #13138F, #13138F)";
    body.style.color = "#FFF";
  };

  // 10pm - 11pm
  if (hr >= 22 && hr < 23) {
    body.style.background = "-webkit-linear-gradient(#FF5A17, #132390, #010963, #01093E)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #FF5A17, #132390, #010963, #01093E)";
    body.style.color = "#FFF";
  };

  // 11pm - 12pm
  if (hr >= 23 && hr < 24) {
    body.style.background = "-webkit-linear-gradient(#FF5A17, #132390, #010963, #01093E)"; 
    body.style.zIndex = "0";
    body.style.background =  "linear-gradient(to top, #132390, #010963, #01093E)";
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

