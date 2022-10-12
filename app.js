let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins')
let secs = document.getElementById('secs')
let am = document.getElementById('am');

let hr = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();

hrs.innerHTML = hr;
mins.innerHTML = min;
secs.innerHTML = sec;