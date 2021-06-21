const PrevBtn=document.querySelector('.prev');
const NextBtn=document.querySelector('.next');
const imagePath=document.querySelector('.image');
const num=document.querySelector('.num');
var imgPaths=["img-1.jpeg","img-2.jpeg","journal.jpg","music.jpg","sleep2.jpg"];
var counter=0;

NextBtn.addEventListener("click",()=>
{
    counter++;
    imagePath.src=imgPaths[counter];
    num.textContent=counter+1;
    if(counter == 4)
        {
            NextBtn.style.display="none";
        }
    if(counter != 0)
    {
        PrevBtn.style.display="flex";
    }
    if(counter==0)
    {
        PrevBtn.style.display="none";
    }
    if(counter!=4)
    {
        NextBtn.style.display="flex";
    }
    

});
PrevBtn.addEventListener("click",()=>{

    counter--;
    imagePath.src=imgPaths[counter];
    num.textContent=counter+1;
    if(counter == 4)
        {
            NextBtn.style.display="none";
        }
    if(counter != 0)
    {
        PrevBtn.style.display="flex";
    }
    if(counter!=4)
    {
        NextBtn.style.display="flex";
    }
    if(counter==0)
    {
        PrevBtn.style.display="none";
    }
    

});