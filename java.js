const productContainer = document.querySelector('.productcontainer');
const nextButton = document.querySelector('.carousel-next');
const prevButton = document.querySelector('.carousel-prev');

productContainer.addEventListener('scroll', () => {
  const maxScrollLeft = productContainer.scrollWidth - productContainer.clientWidth;
  if (productContainer.scrollLeft >= maxScrollLeft) {
    nextButton.style.display = 'none'; // Hide the Next button at the end of the carousel
  } else {
    nextButton.style.display = 'block'; // Show it again when not at the end
  }

  // Optionally, hide the Prev button at the start (scrollLeft == 0)
  if (productContainer.scrollLeft <= 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }
});


slides.forEach((slide) => {
    slide.addEventListener('mouseenter', () => {
        // Add active class or any other action when mouse enters the slide
        slide.classList.add('active');
    });
    
    slide.addEventListener('mouseleave', () => {
        // Remove active class or revert action when mouse leaves the slide
        slide.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const marqueeContainer = document.querySelector('.logo-marquee');
    const images = marqueeContainer.querySelectorAll('img');

    // Initial cloning of images
    for (let i = 0; i < images.length; i++) {
        const clone = images[i].cloneNode(true);
        marqueeContainer.appendChild(clone);
    }

    // Function to dynamically add more clones if needed
    function addMoreClonesIfNeeded() {
        const currentScroll = marqueeContainer.scrollLeft;
        const maxScroll = marqueeContainer.scrollWidth - marqueeContainer.offsetWidth;
        
        // Add more clones if close to the end of the scrollable area
        if (currentScroll > maxScroll - 500) { // Adjust the 500px buffer as needed
            for (let i = 0; i < images.length; i++) {
                const clone = images[i].cloneNode(true);
                marqueeContainer.appendChild(clone);
            }
        }
    }

    // Function to scroll the marquee and check for adding more clones
    function scrollMarquee() {
        marqueeContainer.scrollLeft += 1;
        addMoreClonesIfNeeded();
    }

    // Adjust the speed as needed
    setInterval(scrollMarquee, 10);
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText:  ['<span class="owl-nav-prev">&#10094;</span>', '<span class="owl-nav-next">&#10095;</span>'], // Custom arrow text or HTML here,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})
