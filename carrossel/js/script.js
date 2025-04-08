let carrossel = document.getElementById("carrossel");
let images = document.querySelectorAll(".carrossel-img");
let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("prev-btn");

let currentIndex = 0;
const imageWidth = images[0].clientWidth;

function updateCarrossel() {
  carrossel.style.transform = `translateX(${-imageWidth * currentIndex}px)`;
  carrossel.style.transition = "transform 0.5s ease-in-out";
  carrossel.classList.add("carrossel-transition");
}

function next() {
  currentIndex = (currentIndex + 1) % images.length;

  updateCarrossel();
}

function prev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  
  updateCarrossel();
}
