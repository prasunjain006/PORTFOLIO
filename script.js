// 1. Mobile Menu Toggle
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Basic CSS toggle for mobile
    if(navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "#fff";
        navLinks.style.padding = "20px";
    }
});

// 2. Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Simple Form Submission Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate an API call
    formStatus.innerText = "Sending...";
    formStatus.style.color = "blue";

    setTimeout(() => {
        formStatus.innerText = "Thank you! Your message has been sent.";
        formStatus.style.color = "green";
        contactForm.reset();
    }, 2000);
});
