let currentSlide = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');

document.getElementById('nextBtn').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
