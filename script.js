const trilho = document.getElementById("trilho");
const slides = document.querySelectorAll(".slide");
let indice = 0;

function irPara(novoIndice) {
  indice = (novoIndice + slides.length) % slides.length;
  trilho.style.transform = `translateX(-${indice * 100}%)`;
}

document.getElementById("proximo").addEventListener("click", () => {
  irPara(indice + 1);
});

document.getElementById("anterior").addEventListener("click", () => {
  irPara(indice - 1);
});

let autoplay = setInterval(() => irPara(indice + 1), 3000);

document.getElementById("proximo").addEventListener("click", () => {
  irPara(indice + 1);
  clearInterval(autoplay);
  autoplay = setInterval(() => irPara(indice + 1), 3000);
});

const botaoVerMais = document.getElementById("btn-vermais");

const conteudoExtra = document.getElementById("conteudo-extra");

botaoVerMais.addEventListener("click", function () {
  const novoParagrafo = document.createElement("p");

  novoParagrafo.textContent =
    "Nascemos da paixão por realçar a beleza natural e devolver a saúde aos seus fios. Mais do que uma loja de cosméticos ou um espaço de estética, nosso objetivo é oferecer soluções personalizadas para cada tipo de cabelo.";
  conteudoExtra.appendChild(novoParagrafo);
});

let mostrandoMais = false;

botaoVerMais.addEventListener("click", function () {
  if (mostrandoMais === false) {
    const novoParagrafo = document.createElement("p");

    conteudoExtra.appendChild(novoParagrafo);

    botaoVerMais.textContent = "Ver menos";

    mostrandoMais = true;
  } else {
    conteudoExtra.innerHTML = "";

    botaoVerMais.textContent = "Ver mais";

    mostrandoMais = false;
  }
});


const btnCadastroModal = document.getElementById('btnCadastroModal');
const btnLogin = document.getElementById('btn-login');

const modalLogin = document.getElementById('cliente-login');
const modalCadastro = document.getElementById('cliente-cadastro');

const fecharBotoes = document.querySelectorAll('.fechar');

btnLogin.addEventListener('click', () => {
  modalLogin.classList.remove('oculto');
});

btnCadastroModal.addEventListener('click', () => {
  modalCadastro.classList.remove('oculto');
});

fecharBotoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const modalId = botao.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('oculto');
  });
});

window.addEventListener('click', (event) => {
  if (event.target === modalLogin) {
    modalLogin.classList.add('oculto');
  }
  if (event.target === modalCadastro) {
    modalCadastro.classList.add('oculto');
  }
});
