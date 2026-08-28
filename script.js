const trilho = document.getElementById('trilho');
const slides = document.querySelectorAll('.slide');
let indice = 0;

function irPara(novoIndice) {
  // garante que o índice "dá a volta" (do último volta pro primeiro, e vice-versa)
  indice = (novoIndice + slides.length) % slides.length;
  trilho.style.transform = `translateX(-${indice * 100}%)`;
}

document.getElementById('proximo').addEventListener('click', () => {
  irPara(indice + 1);
});

document.getElementById('anterior').addEventListener('click', () => {
  irPara(indice - 1);
});

let autoplay = setInterval(() => irPara(indice + 1), 3000); 

document.getElementById('proximo').addEventListener('click', () => {
  irPara(indice + 1);
  clearInterval(autoplay);
  autoplay = setInterval(() => irPara(indice + 1), 3000);
});