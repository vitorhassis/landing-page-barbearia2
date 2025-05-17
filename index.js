const wrapper = document.querySelector(".carrossel-wrapper");
const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (toggle) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

let index = 0;
const items = document.querySelectorAll(".carrossel-itens");
const totalItems = items.length;

function getResponsiveConfig() {
  const isMobile = window.innerWidth <= 768;
  return {
    itemsPerView: isMobile ? 1 : 2,
    gap: isMobile ? 20 : 100,
  };
}

function updateTransform() {
  const { gap, itemsPerView } = getResponsiveConfig();
  const item = items[0];
  const itemWidth = item.getBoundingClientRect().width;
  const translateX = -index * (itemWidth + gap);
  wrapper.style.transform = `translateX(${translateX}px)`;
}

buttonRight.addEventListener("click", () => {
  const { itemsPerView } = getResponsiveConfig();
  const maxIndex = totalItems - itemsPerView;
  if (index < maxIndex) index++;
  updateTransform();
});

buttonLeft.addEventListener("click", () => {
  if (index > 0) index--;
  updateTransform();
});

window.addEventListener("resize", updateTransform);
window.addEventListener("load", updateTransform);
