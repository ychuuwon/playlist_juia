// Recupera a playlist salva ou cria uma nova lista vazia
let playlist = JSON.parse(localStorage.getItem("playlist")) || [];

function salvarPlaylist() {
  localStorage.setItem("playlist", JSON.stringify(playlist));
}

function renderizarPlaylist() {
  const lista = document.getElementById("listaMusicas");
  lista.innerHTML = "";

  playlist.forEach((musica, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span><strong>${musica.nome}</strong> - ${musica.artista}</span>
      <button class="remove-btn" onclick="removerMusica(${index})">Remover</button>
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

// Inicializa a lista ao carregar a página
renderizarPlaylist();
