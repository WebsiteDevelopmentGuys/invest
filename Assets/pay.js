var slideIndex = 1;
  Slidestext(slideIndex);
  
  function plusSlides(n) {
    Slidestext(slideIndex += n);
  }
  
    function Slidestext() {
      var i;
      var slides = document.getElementsByClassName("txt-slide");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(Slidestext, 3000); // Change image every 5 seconds
    }