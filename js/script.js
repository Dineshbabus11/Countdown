const days=document.querySelector('#days');
const hours=document.querySelector('#hours');
const minutes=document.querySelector('#minutes');
const seconds=document.querySelector('#seconds');

const countdown = () => {
    const currentYear = new Date().getFullYear();
    // console.log("Current Year: " + currentYear);

    const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`)
    // console.log("New Year: " + newYear);

    const currentDate = new Date();
    // console.log("Current Date: " + currentDate);

    const yearDiff = newYear - currentDate;
    // console.log("Difference(ms): " + yearDiff);

    const remDays = Math.floor(yearDiff / 1000 / 60 / 60 / 24);
    // console.log("Days: " + remDays);

    const remHours = Math.floor((yearDiff / 1000 / 60 / 60) % 24);
    // console.log("Hours: " + remHours);

    const remMin = Math.floor((yearDiff / 1000 / 60) % 60);
    // console.log("Minutes: " + remMin);

    const remSec = Math.floor((yearDiff / 1000) % 60);
    // console.log("Seconds: " + remSec);

    days.innerHTML=remDays<10?'0'+remDays:remDays;
    hours.innerHTML=remHours<10?'0'+remHours:remHours;
    minutes.innerHTML=remMin<10?'0'+remMin:remMin;
    seconds.innerHTML=remSec<10?'0'+remSec:remSec;
}

setInterval(countdown,1000);