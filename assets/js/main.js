// Insert html files into index.html
async function loadComponent(className, file, callback) {
	const res = await fetch(file);
	const content = await res.text();
	const element = document.querySelector(`.${className}`);

	if (element) {
		element.innerHTML = content;
		window.scrollTo(0, 0);

		if (typeof callback === "function") {
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

	if (newClass === "integrantes") {
		callback = renderMembersPanel;
		localStorage.setItem("currentCallback", "renderMembersPanel");
	} else if (newClass === "mais") {
		callback = appendImages;
		localStorage.setItem("currentCallback", "appendImages");
	} else {
		callback = null;
		localStorage.setItem("currentCallback", "");
	}

	loadComponent(newClass, htmlFile, callback);

	localStorage.setItem("currentClass", newClass);
	localStorage.setItem("currentFile", htmlFile);
}

// Keeps last main's content into storage
function loadLastMain() {
	const savedClass = localStorage.getItem("currentClass") || "a-liga";
	const savedFile = localStorage.getItem("currentFile") || "a-liga.html";
	const savedCallbackName = localStorage.getItem("currentCallback");

	let savedCallback = null;
	if (savedCallbackName === "renderMembersPanel") {
		savedCallback = renderMembersPanel;
	} else if (savedCallbackName === "appendImages") {
		savedCallback = appendImages;
	}

	const mainElement = document.getElementById("main");
	if (!mainElement) return;

	mainElement.className = savedClass;

	loadComponent(savedClass, savedFile, savedCallback);
}

// Toggle active
function changeToActive(className, element = null) {
	if (element) {
		const isActive = element.classList.contains(className);

		document.querySelectorAll(`.${className}`).forEach((element) => {
			element.classList.remove(className);
		});

		if (!isActive) {
			element.classList.add(className);
		}
	} else {
		document.querySelectorAll(`.${className}`).forEach((element) => {
			element.classList.toggle("active");
		});
	}
}

// INTEGRANTES panel items injection
function renderMembersPanel() {
	fetch("/assets/data/membros.json")
		.then((response) => response.json())
		.then((data) => {
			const painel = document.getElementById("painel");

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

// MAIS gallery images injection
function appendImages() {
	fetch("/assets/data/imagens-galeria.json")
		.then((response) => response.json())
		.then((imageLinks) => {
			const gallery = document.getElementById("galeria");

			imageLinks.forEach((src) => {
				const item = document.createElement("div");
				item.classList.add("galeria-item");

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

loadLastMain();
