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
	
	const callbackComFormulario = () => {
		if (typeof savedCallback === 'function') {
			savedCallback();
		}
		if (savedFile === 'mais.html') {
			iniciarFormulario();
		}
	};

	const mainElement = document.getElementById("main");
	if (!mainElement) return;

	mainElement.className = savedClass;

	loadComponent(savedClass, savedFile, callbackComFormulario);
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

//FIQUE POR DENTRO form -> sheets
function iniciarFormulario() {
  const form = document.getElementById("ligaForm");
  const msg = document.getElementById("msg");
  if (!form || !msg) return;

  // Remove event listener anterior, caso haja, para evitar duplicidade
  form.removeEventListener("submit", form._submitHandler);

  const submitHandler = function (event) {
    event.preventDefault();
    enviarDadosParaPlanilha();
  };

  // Guarda a referência para poder remover depois
  form._submitHandler = submitHandler;

  form.addEventListener("submit", submitHandler);

  // Limpa a mensagem quando qualquer campo for modificado
  const campos = form.querySelectorAll("input, textarea");
  campos.forEach(campo => {
    campo.removeEventListener("input", campo._inputHandler); // evita duplicidade

    const inputHandler = () => {
      msg.textContent = "";
    };

    campo._inputHandler = inputHandler;
    campo.addEventListener("input", inputHandler);
  });
}


function enviarDadosParaPlanilha() {
  const dados = capturarDadosDoFormulario();
  enviarParaGoogleSheets(dados);
}

function capturarDadosDoFormulario() {
  return {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    mensagem: document.getElementById("mensagem").value,
  };
}

function enviarParaGoogleSheets(dados) {
  const form = document.getElementById("ligaForm");
  const msg = document.getElementById("msg");

  fetch(
    "https://script.google.com/macros/s/AKfycbzVWRX67LwMYh6RSzJykEyYZanjeMYAYU25Ng3wUplh0YId-oGn7Hy4adXOyK23Fx5xQg/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    }
  )
    .then(() => {
      mostrarMensagem("Formulário enviado com sucesso!", "green");
      if (form) form.reset();
    })
    .catch(() => {
      mostrarMensagem("Erro ao enviar. Tente novamente.", "red");
    });
}

function mostrarMensagem(texto, cor) {
  const msg = document.getElementById("msg");
  if (!msg) return;

  msg.textContent = texto;
  msg.style.color = cor;
}

loadLastMain();
