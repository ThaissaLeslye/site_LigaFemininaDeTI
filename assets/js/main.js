async function loadComponent(id, file) {
  const res = await fetch(file);
  const content = await res.text();
  document.getElementById(id).innerHTML = content;
}

loadComponent("header", "header.html");
loadComponent("a-liga", "a-liga.html");
loadComponent("footer", "footer.html");

//Slide - A Liga - Valores 
let showingFirst = true;

function toggleText() {
  document.getElementById('text1').classList.toggle('active');
  document.getElementById('text2').classList.toggle('active');
  document.getElementById('elipse1').classList.toggle('active');
  document.getElementById('elipse2').classList.toggle('active');
  showingFirst = !showingFirst;
}
	