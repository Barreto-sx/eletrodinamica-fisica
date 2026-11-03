// =========================================================
// 1. MENU DO CELULAR — abre e fecha ao clicar no botão ☰
// =========================================================
const botaoMenu = document.getElementById("botao-menu");
const linksMenu = document.getElementById("links-menu");

botaoMenu.addEventListener("click", function () {
  linksMenu.classList.toggle("aberto");
});

// Fecha o menu quando um link é clicado
linksMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    linksMenu.classList.remove("aberto");
  });
});

// =========================================================
// 2. LISTA DE CIENTISTAS — os cartões são criados a partir daqui
// =========================================================
const cientistas = [
  { nome: "Charles-Augustin de Coulomb", datas: "1736–1806", feitos: "Formulou a lei da atração e repulsão eletrostática. A unidade de carga (Coulomb, C) leva seu nome." },
  { nome: "Alessandro Volta", datas: "1745–1827", feitos: "Inventou a pilha voltaica, produzindo corrente contínua. A unidade de tensão (Volt, V) o homenageia." },
  { nome: "Hans Christian Oersted", datas: "1777–1851", feitos: "Descobriu a relação entre eletricidade e magnetismo ao ver uma agulha magnética desviar por causa de uma corrente." },
  { nome: "André-Marie Ampère", datas: "1775–1836", feitos: "Formulou as leis da eletrodinâmica e calculou a força entre fios condutores. A unidade de corrente (Ampere, A) leva seu nome." },
  { nome: "Michael Faraday", datas: "1791–1867", feitos: "Descobriu a indução eletromagnética, o diamagnetismo e a eletrólise. Criou o conceito de \"linhas de força\"." },
  { nome: "James Clerk Maxwell", datas: "1831–1879", feitos: "Unificou eletricidade, magnetismo e óptica em quatro equações e previu que a luz é uma onda eletromagnética." },
  { nome: "Heinrich Hertz", datas: "1857–1894", feitos: "Provou a existência das ondas eletromagnéticas. A unidade de frequência (Hertz, Hz) o homenageia." },
  { nome: "Nikola Tesla", datas: "1856–1943", feitos: "Desenvolveu os motores de indução de corrente alternada (CA) e os sistemas trifásicos de transmissão de energia." }
];

const listaCientistas = document.getElementById("lista-cientistas");

// Para cada cientista, criamos um cartão em HTML e colocamos na página
cientistas.forEach(function (cientista) {
  const cartao = document.createElement("div");
  cartao.className = "cientista";
  cartao.innerHTML =
    "<h3>" + cientista.nome + "</h3>" +
    "<span class='datas'>" + cientista.datas + "</span>" +
    "<p>" + cientista.feitos + "</p>";
  listaCientistas.appendChild(cartao);
});

// =========================================================
// 3. FÓRMULAS — clicar abre/fecha a explicação
// =========================================================
document.querySelectorAll(".formula").forEach(function (formula) {
  formula.addEventListener("click", function () {
    formula.classList.toggle("aberta");
  });
});

// =========================================================
// 4. CALCULADORA DA LEI DE OHM (V = R · I) e EFEITO JOULE (P = R · I²)
// =========================================================
document.getElementById("botao-calcular").addEventListener("click", function () {
  const R = Number(document.getElementById("resistencia").value);
  const I = Number(document.getElementById("corrente").value);

  const tensao = R * I;        // Lei de Ohm
  const potencia = R * I * I;  // Efeito Joule

  document.getElementById("resultado").textContent =
    "Tensão V = " + tensao + " V  |  Potência P = " + potencia + " W";
});

// =========================================================
// 5. ANIMAÇÃO — elementos aparecem suavemente ao rolar a página
// =========================================================
const elementosAnimados = document.querySelectorAll(".evento, .cientista, .formula, tr");

elementosAnimados.forEach(function (el) {
  el.classList.add("escondido");
});

// O IntersectionObserver "observa" quando o elemento entra na tela
const observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visivel");
    }
  });
});

elementosAnimados.forEach(function (el) {
  observador.observe(el);
});
