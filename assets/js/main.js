// Insert html files into index.html
async function loadComponent(className, file, callback) {
	const res = await fetch(file);
	const content = await res.text();
	const element = document.querySelector(`.${className}`);

	if (element) {
		element.innerHTML = content
		window.scrollTo(0, 0);
		
		if (typeof callback === 'function') {
			callback();
		}
	}
}

// Changes main's content calling loadComponent
function changeMain(newClass, htmlFile, targetSectionId = null) {
  	const mainElement = document.getElementById("main");
	if (!mainElement) return;

	mainElement.className = newClass;

	const afterLoadCallback = () => {
		if (targetSectionId) {
			const targetElement = document.getElementById(targetSectionId);
			if (targetElement) {
				targetElement.scrollIntoView();
			}
		}
	};

	if (newClass === 'integrantes') {
		loadComponent(newClass, htmlFile, renderMembersPanel);
	} else {
		loadComponent(newClass, htmlFile, afterLoadCallback);
	}


	localStorage.setItem("currentClass", newClass);
	localStorage.setItem("currentFile", htmlFile);
}

// Keeps last main's content into storage
function loadLastMain() {
	const savedClass = localStorage.getItem("currentClass") || "a-liga";
	const savedFile = localStorage.getItem("currentFile") || "a-liga.html";

	const mainElement = document.getElementById("main");
	if (!mainElement) return;

	mainElement.className = savedClass;

	loadComponent(savedClass, savedFile);
}

// Slides
function changeSlide(className) {
	document.querySelectorAll(`.${className}`).forEach(element => {
		element.classList.toggle("active");
	});
}

// Integrantes panel items injection
function renderMembersPanel() {
	fetch('/assets/data/membros.json')
		.then(response => response.json())
		.then(data => {
			const painel = document.getElementById('painel');
		
			data.membros.forEach(integrante => {
			const item = document.createElement('div');
			item.classList.add('item');

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
		.catch(error => console.error('Erro ao carregar os dados:', error));
}

loadLastMain();
renderMembersPanel();