const breakBtn=document.querySelector('.break');
const allBtn=document.querySelector('.all');
const lunchBtn=document.querySelector('.lun');
const shakesBtn=document.querySelector('.sha');
const dinnerBtn=document.querySelector('.dine');
const menus=document.querySelectorAll('.singleItem');


breakBtn.addEventListener("click",()=>{

    menus.forEach(function(item)
    {
        if(item.classList.contains("breakfast"))
        {
            item.style.display="flex";
        }
        else
        {
            item.style.display="none";
        }
    });
});

allBtn.addEventListener("click",()=>{

    menus.forEach(function(item)
    {
       
            item.style.display="flex";
       
    });
});

lunchBtn.addEventListener("click",()=>{

    menus.forEach(function(item)
    {
        if(item.classList.contains("lunch"))
        {
            item.style.display="flex";
        }
        else
        {
            item.style.display="none";
        }
    });
});

shakesBtn.addEventListener("click",()=>{

    menus.forEach(function(item)
    {
        if(item.classList.contains("shake"))
        {
            item.style.display="flex";
        }
        else
        {
            item.style.display="none";
        }
    });
});

dinnerBtn.addEventListener("click",()=>{

    menus.forEach(function(item)
    {
        if(item.classList.contains("dinner"))
        {
            item.style.display="flex";
        }
        else
        {
            item.style.display="none";
        }
    });
});



