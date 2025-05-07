const wrapper = document.querySelector(".carrossel-wrapper");
const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Menu toggle (evita erro caso o botão não exista)
if (toggle) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

let index = 0;
const items = document.querySelectorAll(".carrossel-itens");
const totalItems = items.length;

// Responsividade: define items por vez e gap com base no viewport
function getResponsiveConfig() {
  const isMobile = window.innerWidth <= 768;
  return {
    itemsPerView: isMobile ? 1 : 2,
    gap: isMobile ? 20 : 100,
  };
}

function updateTransform() {
  const { gap, itemsPerView } = getResponsiveConfig();
  const itemWidth = wrapper.clientWidth / itemsPerView;
  const translateX = -(itemWidth + gap) * index;
  wrapper.style.transform = `translateX(${translateX}px)`;
}

buttonRight.addEventListener("click", () => {
  const { itemsPerView, gap } = getResponsiveConfig(); // ADICIONA o gap aqui!
  const visibleArea = wrapper.clientWidth;
  const itemWidth = items[0].getBoundingClientRect().width;

  // Cálculo seguro do índice máximo
  const maxIndex = totalItems - itemsPerView;

  if (index < maxIndex) index++;
  updateTransform();
});

buttonLeft.addEventListener("click", () => {
  if (index > 0) index--;
  updateTransform();
});

// Redimensionamento da tela atualiza o carrossel
window.addEventListener("resize", updateTransform);

// Garante alinhamento correto ao carregar
window.addEventListener("load", updateTransform);
