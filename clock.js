let hr = document.getElementById('hour');
let min = document.getElementById('min');    
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    //getting hr, min , sec from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;   // 360/12 = 30
    let mRotation = 6*mm;               // 360/60 = 6
    let sRotation = 6*ss;               // 360/60 = 6

    // rotating the hr, min, sec hands
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(displayTime, 1000); // update every second