export function renderMembersPanel() {
  fetch("./assets/data/membros.json")
    .then((response) => response.json())
    .then((data) => {
      const painel = document.getElementById("painel");
      if (!painel) return;

      data.membros.forEach((integrante) => {
        const item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `
          <div class="imagem-wrapper">
            <img src="${integrante.foto}" alt="${integrante.nome}">
            <div class="overlay">
              <a href="${integrante.linkedin}" target="_blank">LinkedIn</a>
            </div>
          </div>
          <h3>${integrante.nome}</h3>
          <span>${integrante.cargo}</span>
        `;
        painel.appendChild(item);
      });
    })
    .catch((error) => console.error("Erro ao carregar os dados:", error));
}