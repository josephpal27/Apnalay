
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

    let supportersCardP = box.querySelectorAll('p');

    supportersCardP.forEach((cardP) => {
      cardP.style.color = '#fff';
      cardP.style.transition = '0.6s ease';
    })
  });

  box.addEventListener('mouseleave', () => {
    box.style.backgroundColor = ''; // Reset background color

    // Reset the text color
    let supportersCardP = box.querySelectorAll('p');
    
    supportersCardP.forEach((cardP) => {
      cardP.style.color = '';
    })
  });
});

// -------------------------------------------------------------------------------------------------------------------------------------

// Functionality for Gallery Page Image Hover
const galleryImgBoxes = document.querySelectorAll('.gallery-img');

// Loop through each gallery image
galleryImgBoxes.forEach(box => {
    const layer = box.querySelector('.layer');

    // On mouse enter, slide the layer up
    box.addEventListener('mouseenter', () => {
        layer.style.top = '0'; // Slide the layer to the top
    });

    // On mouse leave, slide the layer back down
    box.addEventListener('mouseleave', () => {
        layer.style.top = '100%'; // Reset the layer's position
    });
});

// ------------------------------------------------------------------------------------------------------------------------------------

let cards = document.querySelectorAll('.our-services .card-btn');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.fa-circle-xmark');

// Add event listener to each partner
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Get the data attributes from the clicked partner
        let title = card.getAttribute('data-title');
        let desc = card.getAttribute('data-desc');
        let image = card.getAttribute('data-image');

        // Update the modal content
        modal.querySelector('.modal-left h2').textContent = title;
        modal.querySelector('.modal-left p').innerHTML = desc;
        modal.querySelector('.modal-right img').src = image;

        // Show the modal
        modal.style.height = '100vh';
    });
});

// Add event listener to the close button
closeBtn.addEventListener('click', () => {
    // Hide the modal
    modal.style.height = '0';
});

// -------------------------------------------------------------------------------------------------------------------------------------


