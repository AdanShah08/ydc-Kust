// script.js

// ScrollReveal Animations
window.sr = ScrollReveal({ reset: true });

sr.reveal('.hero-content', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out'
});

sr.reveal('.about h2, .about p, .about-cards', {
    duration: 1200,
    origin: 'left',
    distance: '50px',
    delay: 200,
    easing: 'ease-in-out'
});

sr.reveal('.gallery h2, .gallery-grid', {
    duration: 1200,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out'
});

sr.reveal('.team h2, .team-cards', {
    duration: 1200,
    origin: 'top',
    distance: '50px',
    easing: 'ease-in-out'
});

sr.reveal('.contact h2, #contact-form', {
    duration: 1200,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out'
});

sr.reveal('.footer', {
    duration: 1200,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out'
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            const navMenu = document.getElementById('nav-menu');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});

// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent. (Demo)`);

    this.reset();
});

// Automatic Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Mobile Menu Toggle
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}
