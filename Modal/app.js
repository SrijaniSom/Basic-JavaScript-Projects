const over=document.querySelector('.overlay');
const button=document.querySelector('.btn');
const ban=document.querySelector('.ClickedBanner');
const closeBtn=document.querySelector('.icon');
button.addEventListener("click",()=>{
    console.log("clicked");
    over.style.display="block";
    ban.style.display="flex";

});
closeBtn.addEventListener("click",()=>{
    over.style.display="none";
    ban.style.display="none";
});