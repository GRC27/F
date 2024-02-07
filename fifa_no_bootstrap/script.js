const slideContainer = document.querySelector('.slides');
      const slides = Array.from(document.querySelectorAll('.slide'));

      let slideWidth = slides[0].offsetWidth; // Get the width of each slide
      let currentIndex = 0;

      function slideTo(index) {
        slideContainer.style.transform = `translateX(-${slideWidth * index}px)`; // Slide to the specified index
        currentIndex = index;
      }

      function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
          currentIndex = 0;
        }
        slideTo(currentIndex);
      }

      setInterval(nextSlide, 3000); // Automatically slide to the next slide every 3 seconds


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// sticky
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// button top
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  event.preventDefault(); // Prevent the form submission
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}