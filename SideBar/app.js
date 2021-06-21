
const togg=document.querySelector('.ToggleButton');
const closebtn=document.querySelector('.close');
const sideBar=document.querySelector('.nav-main');
const header=document.querySelector('.header');
togg.addEventListener("click",()=>
{
    console.log("clicked");
    sideBar.style.display="flex";
    

});
closebtn.addEventListener("click",()=>
    {
        sideBar.style.display="none";
    });