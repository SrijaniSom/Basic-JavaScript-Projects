const toggle=document.querySelector('.bar');
const links=document.querySelector('.links');
const tourseg=document.getElementById("tours");
toggle.addEventListener("click",()=>
{
    
    links.style.display="flex";
    links.classList.toggle("show-links");
});

const exploreBtn=document.querySelector('.explore');
exploreBtn.addEventListener("click",()=>{

    tourseg.scrollIntoView();
});

