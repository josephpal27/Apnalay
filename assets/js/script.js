// Functionality For Back to Top Btn
let backToTopDiv = document.querySelector(".back-to-top");
let backToTopBtn = document.querySelector(".back-to-top .fa-arrow-up");

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // Adjust the pixel value as needed
    backToTopDiv.classList.add("show");
  } else {
    backToTopDiv.classList.remove("show");
  }
});


// -------------------------------------------------------------------------------------------------------------------------------------

// Functionality For Supporters Card Hover
let supportersCards = document.querySelectorAll('.supporter-card');

supportersCards.forEach((box) => {
  box.addEventListener('mouseenter', () => {
    box.style.backgroundColor = '#d25826';
    box.style.transition = '0.8s ease';

    // Get the h2 and p inside the specific card
    let supportersCardH2 = box.querySelector('h2');
    let supportersCardP = box.querySelectorAll('p');
    
    supportersCardH2.style.color = '#fff';
    supportersCardH2.style.transition = '0.6s ease';

    supportersCardP.forEach((cardP) => {
      cardP.style.color = '#fff';
      cardP.style.transition = '0.6s ease';
    })
  });

  box.addEventListener('mouseleave', () => {
    box.style.backgroundColor = ''; // Reset background color

    // Reset the text color
    let supportersCardH2 = box.querySelector('h2');
    let supportersCardP = box.querySelectorAll('p');
    
    supportersCardH2.style.color = '';
    supportersCardP.forEach((cardP) => {
      cardP.style.color = '';
    })
  });
});


