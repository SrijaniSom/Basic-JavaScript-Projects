

//using selectors inside the element
const questions = document.querySelectorAll(".card");

questions.forEach(function (question) {
  const btn = question.querySelector(".sign");
  const infoText = question.querySelector(".info");
  const close=question.querySelector(".CloseSign");
    const sep=question.querySelector(".separator");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) 
    {
      if (item != question) {
        infoText.style.display="none";
      }
    });

    infoText.style.display="flex";
    btn.style.display="none";
    close.style.display="flex";
    sep.style.display="flex";
    close.addEventListener("click",()=>{

        infoText.style.display="none";
        btn.style.display="flex";
        close.style.display="none";
        sep.style.display="none";


    });
  });


});