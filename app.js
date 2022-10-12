let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins')
let secs = document.getElementById('secs')
let ams = document.getElementById('am');

let hr = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();
let am = hr >= 12 ? 'PM' : 'AM';

hrs.innerHTML = hr;
mins.innerHTML = min;
secs.innerHTML = sec;
ams.innerHTML = am;