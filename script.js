
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
