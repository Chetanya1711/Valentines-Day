// script.js (updated)

// Smooth scrolling (as before)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax Effect (Slightly Enhanced)
window.addEventListener('scroll', function() {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
      let scrollPosition = window.pageYOffset;
      heroImage.style.backgroundPositionY = (scrollPosition * 0.2) + 'px';  // Adjusted speed
    }
});

// Optional:  Image Zoom on Hover (Add this CSS to your style.css)
/* .photo-gallery img {
    transition: transform 0.5s ease;
}

.photo-gallery img:hover {
    transform: scale(1.1);
} */