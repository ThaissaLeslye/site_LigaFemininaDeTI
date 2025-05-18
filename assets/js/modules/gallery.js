export function appendImages() {
  fetch("/assets/data/imagens-galeria.json")
    .then((response) => response.json())
    .then((imageLinks) => {
      const gallery = document.getElementById("galeria");
      if (!gallery) return;

      imageLinks.forEach((src) => {
        const item = document.createElement("div");
        item.classList.add("galeria-item");

        // Aqui, note que ainda usamos um onclick inline.
        // Você pode, futuramente, adicionar um event listener após criar o elemento.
        item.innerHTML = `
          <img src="${src}" alt="Imagem da Galeria" onclick="changeToActive('active', this)">
        `;
        gallery.appendChild(item);
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar imagens:", error);
    });
}