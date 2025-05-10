async function loadComponent(id, file) {
  const res = await fetch(file);
  const content = await res.text();
  document.getElementById(id).innerHTML = content;
}

loadComponent("header", "header.html");
loadComponent("a-liga", "a-liga.html");
loadComponent("footer", "footer.html");