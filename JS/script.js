document.addEventListener("DOMContentLoaded", function(event) {
    var togglebtn=document.querySelector(".togglebtn");
    var nav=document.querySelector(".navlinks");
  
    togglebtn.addEventListener("click", function(){
      this.classList.toggle("click");
      nav.classList.toggle("open");
    });
  
    var typed=new Typed(".input",{
      strings:["Financial Analyst","Graphic Designer","Web Developer"],
      typedSpeed:70,
      backSpeed:55,
      loop:true
    });
  });
  