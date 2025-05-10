async function loadComponent(id, file) {
  const res = await fetch(file);
  const content = await res.text();
  document.getElementById(id).innerHTML = content;
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");