import './style.css'




//Progression bar


document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.querySelector(".progress-bar");

    // Observer to detect when the section is visible
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBar.classList.add("animate-progress");
                observer.unobserve(progressBar); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    observer.observe(progressBar);
});



// Animate text when in viewport
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden-opacity");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible-opacity");
        }
      });
    }, { threshold: 0.2 }); // Adjust threshold for earlier/later animation trigger
  
    elements.forEach((el) => observer.observe(el));
  });

  //Mobile menu 

  document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("nav .lg\\:hidden button");
    const mobileMenu = document.querySelector("header > div[role='dialog']");
    const closeButton = mobileMenu.querySelector("button");

    menuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });

    closeButton.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });
  });
