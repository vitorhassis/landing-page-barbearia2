const wrapper = document.querySelector(".carrossel-wrapper");
const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle('active');
})

let index = 0;
const itemsPerView = 2; 
const totalItems = document.querySelectorAll(".carrossel-itens").length;

buttonRight.addEventListener("click", () => {
  const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;
  if (index < maxIndex) index++;
  updateTransform();
});

buttonLeft.addEventListener("click", () => {
  if (index > 0) index--;
  updateTransform();
});

function updateTransform() {
  const itemWidth = document.querySelector(".carrossel-itens").offsetWidth;
  const gap = 100; 
  const translateX = -(itemWidth + gap) * index;
  wrapper.style.transform = `translateX(${translateX}px)`;
}