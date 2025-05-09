// Função para carregar o dataset de um arquivo JSON
async function carregarDataset() {
    const answer = await fetch('data.json');
    const data = await answer.json();
    return data;
  }
  
  // Função para renderizar a galeria
  function renderGallery(dataset) {
    const container = document.getElementById('gallery');
    container.innerHTML = ''; // Limpa o conteúdo anterior
  
    dataset.forEach(item => {
      const div = document.createElement('div');
      div.className = 'gallery-item';
  
      div.innerHTML = `
        <img src="${item.src}" alt="${item.titulo}" />
        <p>${item.title}</p>
        <p>${item.titlePosition}</p>
      `;
  
      container.appendChild(div);
    });
  }
  
  // Inicializa a galeria
  carregarDataset().then(dataset => {
    renderGallery(dataset);
  });
  