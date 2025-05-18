export function iniciarFormulario() {
  const form = document.getElementById("ligaForm");
  const msg = document.getElementById("msg");
  if (!form || !msg) return;

  // Remove event listener anterior, se houver
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
  campos.forEach((campo) => {
    campo.removeEventListener("input", campo._inputHandler);
    const inputHandler = () => {
      msg.textContent = "";
    };
    campo._inputHandler = inputHandler;
    campo.addEventListener("input", inputHandler);
  });
}

export function enviarDadosParaPlanilha() {
  const dados = capturarDadosDoFormulario();
  enviarParaGoogleSheets(dados);
}

export function capturarDadosDoFormulario() {
  return {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    mensagem: document.getElementById("mensagem").value,
  };
}

export function enviarParaGoogleSheets(dados) {
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

export function mostrarMensagem(texto, cor) {
  const msg = document.getElementById("msg");
  if (!msg) return;
  msg.textContent = texto;
  msg.style.color = cor;
}