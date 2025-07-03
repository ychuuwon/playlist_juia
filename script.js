// Recupera a playlist salva ou cria uma nova lista vazia
let playlist = JSON.parse(localStorage.getItem("playlist")) || []; // Lê a playlist do localStorage e converte de JSON para objeto; se não houver, usa []

function salvarPlaylist() {
  // Salva a playlist no localStorage após convertê-la para uma string JSON
  localStorage.setItem("playlist", JSON.stringify(playlist)); // Salva a playlist atual como string JSON
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

  playlist.push({ nome, artista }); // Adiciona a nova música ao array da playlist
  salvarPlaylist(); // Salva a playlist atualizada no localStorage
  renderizarPlaylist(); // Atualiza a exibição da lista

  document.getElementById("nomeMusica").value = "";
  document.getElementById("nomeArtista").value = "";
}

function removerMusica(index) {
  playlist.splice(index, 1); // Remove a música da playlist com base no índice
  salvarPlaylist(); // Salva a playlist atualizada no localStorage
  renderizarPlaylist(); // Atualiza a exibição da lista
}

// Evento de clique para o botão "Adicionar"
document.getElementById("btnAdicionar").addEventListener("click", adicionarMusica);

// Inicializa a lista ao carregar a página
renderizarPlaylist(); // Renderiza a playlist salva no localStorage ao abrir a página
