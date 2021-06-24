

setInterval(setTimeFunction,500);
function setTimeFunction()
{
var countDownDate=new Date("July 4,2021 11:30:00").getTime();
var now=new Date().getTime();
var distance=countDownDate-now;


var days=Math.floor(distance/(24*60*60*1000));
var hours=Math.floor((distance % (24*60*60*1000))/(60*60*1000));
var minutes=Math.floor((distance%(60*60*1000))/(60*1000));
var secs=Math.floor((distance%(60*1000))/(1000));

if(distance<0)
{
    days=0;
    hours=0;
    minutes=0;
    secs=0;
}
    const Day=document.querySelector('.DayNum');
    const hour=document.querySelector('.HourNum');
    const Min=document.querySelector('.MinNum');
    const sec=document.querySelector('.SecNum');

    Day.textContent=days;
    hour.textContent=hours;
    Min.textContent=minutes;
    sec.textContent=secs;
}

