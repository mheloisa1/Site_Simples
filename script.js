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

const btnCadastro = document.getElementById('btn-cadastro');
const btnLogin = document.getElementById('btn-login');

const modalCadastro = document.getElementById('cliente-cadastro');
const modalLogin = document.getElementById('cliente-login');

const formCadastro = document.getElementById('form-cadastro');
const formLogin = document.getElementById('form-login');


btnLogin.addEventListener('click', () => {
  modalLogin.classList.remove('oculto');
});

document.querySelectorAll('.fechar').forEach(botao => {
  botao.addEventListener('click', () => {
    const modalId = botao.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('oculto');
  });
});

window.addEventListener('click', (e) => {
  if (e.target === modalCadastro) modalCadastro.classList.add('oculto');
  if (e.target === modalLogin) modalLogin.classList.add('oculto');
});

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const senha = document.getElementById('login-senha').value;

  console.log('Tentativa de login:', { email, senha });

  alert('Login realizado com sucesso!');
  modalLogin.classList.add('oculto');
  formLogin.reset();
});
