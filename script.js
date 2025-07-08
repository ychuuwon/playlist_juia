// ======================= MÚSICAS =======================
let playlist = JSON.parse(localStorage.getItem("playlist")) || [];

function salvarPlaylist() {
  localStorage.setItem("playlist", JSON.stringify(playlist));
}

function renderizarPlaylist() {
  const lista = document.getElementById("listaMusicas");
  lista.innerHTML = "";

  playlist.forEach((musica, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <span><strong>${musica.nome}</strong> - ${musica.artista}</span>
      <button class="btn btn-danger btn-sm" onclick="removerMusica(${index})">Remover</button>
    `;
    lista.appendChild(li);
  });
}

function adicionarMusica() {
  const nome = document.getElementById("nomeMusica").value.trim();
  const artista = document.getElementById("nomeArtista").value.trim();

  if (!nome || !artista) {
    alert("Preencha todos os campos.");
    return;
  }

  playlist.push({ nome, artista });
  salvarPlaylist();
  renderizarPlaylist();

  document.getElementById("nomeMusica").value = "";
  document.getElementById("nomeArtista").value = "";
}

function removerMusica(index) {
  playlist.splice(index, 1);
  salvarPlaylist();
  renderizarPlaylist();
}

document.getElementById("btnAdicionarMusica").addEventListener("click", adicionarMusica);
renderizarPlaylist();


// ======================= FILMES =======================
let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

function salvarFilme() {
  localStorage.setItem("filmes", JSON.stringify(filmes));
}

function renderizarFilmes() {
  const lista = document.getElementById("listaFilmes");
  lista.innerHTML = "";

  filmes.forEach((filme, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <span><strong>${filme.nome}</strong> - ${filme.ano}</span>
      <button class="btn btn-danger btn-sm" onclick="removerFilme(${index})">Remover</button>
    `;
    lista.appendChild(li);
  });
}

function adicionarFilme() {
  const nome = document.getElementById("nomeFilme").value.trim();
  const ano = document.getElementById("anoLancamento").value.trim();

  if (!nome || !ano) {
    alert("Preencha todos os campos.");
    return;
  }

  filmes.push({ nome, ano });
  salvarFilme();
  renderizarFilmes();

  document.getElementById("nomeFilme").value = "";
  document.getElementById("anoLancamento").value = "";
}

function removerFilme(index) {
  filmes.splice(index, 1);
  salvarFilme();
  renderizarFilmes();
}

document.getElementById("btnAdicionarFilme").addEventListener("click", adicionarFilme);
renderizarFilmes();


// ======================= MODO CLARO/ESCURO =======================
document.getElementById("toggleTema").addEventListener("click", () => {
  document.body.classList.toggle("escuro");
  const botao = document.getElementById("toggleTema");
  botao.textContent = document.body.classList.contains("escuro") ? "☀️" : "🌙";
});
