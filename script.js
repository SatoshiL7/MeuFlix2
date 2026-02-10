/* =========================
   PLAYER DE VÍDEO
========================= */
function abrirVideo(link) {
  const player = document.getElementById("player");
  const video = document.getElementById("video");

  if (!player || !video) return;

  video.src = link;
  player.style.display = "block";
}

function fecharVideo() {
  const player = document.getElementById("player");
  const video = document.getElementById("video");

  if (!player || !video) return;

  video.src = "";
  player.style.display = "none";
}

/* =========================
   BUSCA DE FILMES
========================= */
const busca = document.querySelector(".busca");

if (busca) {
  const cards = document.querySelectorAll(".card");

  busca.addEventListener("keyup", () => {
    const texto = busca.value.toLowerCase();

    cards.forEach(card => {
      const titulo = card.querySelector("h4")?.innerText.toLowerCase() || "";
      card.style.display = titulo.includes(texto) ? "block" : "none";
    });
  });
}

/* =========================
   FILTRO POR CATEGORIA
========================= */
function filtrar(categoria) {
  const cards = document.querySelectorAll(".card");
  const botoes = document.querySelectorAll(".topo-categorias button");

  botoes.forEach(btn => btn.classList.remove("ativo"));
  event.target.classList.add("ativo");

  cards.forEach(card => {
    const cat = card.getAttribute("data-categoria");

    if (categoria === "todos" || cat === categoria) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

/* =========================
   BOTÃO VOLTAR
========================= */
function voltar() {
  history.back();
}
