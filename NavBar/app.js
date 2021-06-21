const navToggle=document.querySelector('.ToggleButton');
const links=document.querySelector('.links');
navToggle.addEventListener("click",()=>{
links.classList.toggle("show-links");
});