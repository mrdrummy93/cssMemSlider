const slides = document.querySelectorAll('.app-wrapper .slide');
let currentSlide = 0;
let isEnabled = true;

function changeCurrentSlide(s) {
  currentSlide = (s + slides.length) % slides.length;
}

function hideSlide(direction) {
  isEnabled = false;
  slides[currentSlide].classList.add(direction);
  slides[currentSlide].addEventListener('animationend', function() {
    this.classList.remove('active', direction)
  })
}

function showSlide(direction) {
  slides[currentSlide].classList.add('next', direction);
  slides[currentSlide].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  })
}

