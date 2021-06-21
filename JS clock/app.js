const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
function setDate()
    {
      const now=new Date();

      const seconds=now.getSeconds();
      const secondsDegrees=((seconds/60)*360)+90;
      secondHand.style.transform =`rotate(${secondsDegrees}deg`;

      const minutes=now.getMinutes();
      const minsDegrees=((minutes/60)*360)+90;
      minsHand.style.transform=`rotate(${minsDegrees}deg)`;

      const hours=now.getHours();
      const hoursdegree=((hours/60)*360);
      hourHand.style.transform=`rotate(${hoursdegree}deg)`;
     
    }
setInterval(setDate,1000);
setDate();
