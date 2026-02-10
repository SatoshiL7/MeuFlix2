function abrirVideo(link) {
  document.getElementById("player").style.display = "block";
  document.getElementById("video").src = link;
}

function fecharPlayer() {
  document.getElementById("player").style.display = "none";
  document.getElementById("video").src = "";
}


function filtrar() {
  const termo = document.getElementById("pesquisa").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const texto = card.innerText.toLowerCase();
    card.style.display = texto.includes(termo) ? "block" : "none";
  });
}
const busca = document.querySelector('.busca');
const cards = document.querySelectorAll('.card');

busca.addEventListener('keyup', () => {
  const texto = busca.value.toLowerCase();

  cards.forEach(card => {
    const titulo = card.querySelector('h4').innerText.toLowerCase();

    if (titulo.includes(texto)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});


function filtrar(categoria) {
  const cards = document.querySelectorAll('.card');
  const botoes = document.querySelectorAll('.topo-categorias button');

  // remove classe ativa dos botões
  botoes.forEach(btn => btn.classList.remove('ativo'));

  // adiciona classe ativa no botão clicado
  event.target.classList.add('ativo');

  cards.forEach(card => {
    const cat = card.getAttribute('data-categoria');

    if (categoria === 'todos' || cat === categoria) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

const player = document.getElementById("player");
const video = document.getElementById("video");
const fechar = document.getElementById("fechar");

function abrirVideo(url) {
  player.style.display = "block";
  video.src = url;
}

fechar.addEventListener("click", () => {
  player.style.display = "none";
  video.src = "";
});
