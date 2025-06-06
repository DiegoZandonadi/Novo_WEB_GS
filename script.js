

// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
showSlide(slideIndex);
setInterval(nextSlide, 5000);

// Alternância de temas
const themeIcons = document.querySelectorAll('.theme-icon');
themeIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        document.body.className = icon.dataset.theme;
        themeIcons.forEach(i => i.classList.remove('selected'));
        icon.classList.add('selected');
    });
});


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

