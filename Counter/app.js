var count=0;
const incbtn=document.querySelector('.increase');
const decbtn=document.querySelector('.decrease');
const resetbtn=document.querySelector('.reset');
const numtext=document.querySelector('.number');

incbtn.addEventListener("click",()=>
{
    count++;
    numtext.textContent=count;
    if(count > 0)
    numtext.style.color="green";
else if(count <0)
    numtext.style.color="red";
else
    numtext.style.color="black";

});
decbtn.addEventListener("click",()=>
{
    count--;
    numtext.textContent=count;
    if(count > 0)
    numtext.style.color="green";
else if(count <0)
    numtext.style.color="red";
else
    numtext.style.color="black";
});
resetbtn.addEventListener("click",()=>
{
    count=0;
    numtext.textContent=count;
    if(count > 0)
    numtext.style.color="green";
else if(count <0)
    numtext.style.color="red";
else
    numtext.style.color="black";
});


