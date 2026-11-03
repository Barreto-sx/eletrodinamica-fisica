// =========================================================
// 1. MENU DO CELULAR — abre e fecha ao tocar no ☰
// =========================================================
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

// Fecha o menu depois de escolher uma seção
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto");
  });
});

// =========================================================
// 2. CIENTISTAS — cada item da lista vira um cartão na página
// =========================================================
const cientistas = [
  { nome: "Charles-Augustin de Coulomb", anos: "1736–1806", feito: "Criou a lei que explica a atração e a repulsão entre cargas. A unidade de carga, o Coulomb (C), leva o nome dele." },
  { nome: "Alessandro Volta", anos: "1745–1827", feito: "Inventou a pilha, a primeira fonte de corrente contínua. O Volt (V) é uma homenagem a ele." },
  { nome: "Hans Christian Oersted", anos: "1777–1851", feito: "Percebeu que uma corrente elétrica mexia a agulha da bússola e ligou a eletricidade ao magnetismo." },
  { nome: "André-Marie Ampère", anos: "1775–1836", feito: "Calculou a força entre fios com corrente e criou as leis da eletrodinâmica. Daí vem o Ampere (A)." },
  { nome: "Michael Faraday", anos: "1791–1867", feito: "Descobriu a indução eletromagnética, o diamagnetismo e a eletrólise, e criou a ideia de \"linhas de força\"." },
  { nome: "James Clerk Maxwell", anos: "1831–1879", feito: "Juntou eletricidade, magnetismo e luz em quatro equações e previu que a luz é uma onda eletromagnética." },
  { nome: "Heinrich Hertz", anos: "1857–1894", feito: "Provou na prática que as ondas de Maxwell existem. O Hertz (Hz), unidade de frequência, tem o nome dele." },
  { nome: "Nikola Tesla", anos: "1856–1943", feito: "Desenvolveu os motores de corrente alternada e o sistema trifásico que leva energia ao mundo todo." }
];

const lista = document.getElementById("lista-cientistas");

cientistas.forEach(function (c) {
  const cartao = document.createElement("div");
  cartao.className = "cartao";
  cartao.innerHTML =
    "<p class='mini'>" + c.anos + "</p>" +
    "<h3>" + c.nome + "</h3>" +
    "<p>" + c.feito + "</p>";
  lista.appendChild(cartao);
});

// =========================================================
// 3. FÓRMULAS — tocar abre/fecha a explicação
// =========================================================
document.querySelectorAll(".formula").forEach(function (formula) {
  formula.addEventListener("click", function () {
    formula.classList.toggle("aberta");
  });
});

// =========================================================
// 4. CALCULADORA — V = R · I  e  P = R · I²
//    Atualiza sozinha quando você arrasta os controles
// =========================================================
const campoR = document.getElementById("resistencia");
const campoI = document.getElementById("corrente");

function calcular() {
  const R = Number(campoR.value);
  const I = Number(campoI.value);

  document.getElementById("texto-r").textContent = R;
  document.getElementById("texto-i").textContent = I;
  document.getElementById("valor-tensao").textContent = R * I;       // Lei de Ohm
  document.getElementById("valor-potencia").textContent = R * I * I; // Efeito Joule
}

campoR.addEventListener("input", calcular);
campoI.addEventListener("input", calcular);
calcular();

// =========================================================
// 5. ANIMAÇÃO — os elementos aparecem ao rolar a página
// =========================================================
const animados = document.querySelectorAll(".passo, .cartao, .formula");

const observador = new IntersectionObserver(function (itens) {
  itens.forEach(function (item) {
    if (item.isIntersecting) item.target.classList.add("visivel");
  });
});

animados.forEach(function (el) {
  el.classList.add("escondido");
  observador.observe(el);
});
