const slides = document.querySelectorAll('.slide'),
  dots = document.querySelectorAll('.dot'),
  descs = document.querySelectorAll('.desc');

let index = 0;

function activeSlide(s) {
  for (let slide of slides) {
    slide.classList.remove('active');
  }
  slides[s].classList.add('active');
}

function activeDot(d) {
  for ( let dot of dots) {
    dot.classList.remove('active');
  }
  dots[d].classList.add('active');
}

function activeDesc(d) {
  for (let desc of descs) {
    desc.classList.remove('active');
  }
  descs[d].classList.add('active');
}

function hideSlide(direction) {
  slides[index].classList.add(direction);
  slides[index].addEventListener('animationend', function() {
    this.classList.remove('active', direction)
  })
}

function showSlide(direction) {
  slides[index].classList.add('next', direction);
  slides[index].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('active');
  })
}

function hideDesc(direction) {
  descs[index].classList.add(direction);
  descs[index].addEventListener('animationend', function() {
    this.classList.remove('active', direction)
  })
}

function showDesc(direction) {
  descs[index].classList.add('next', direction);
  descs[index].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('active');
  })
}

function prepareCurrentSlide(ind) {
  activeSlide(ind);
  activeDot(ind);
  activeDesc(ind);
}

dots.forEach((dot, indexDot) => {
  dot.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});