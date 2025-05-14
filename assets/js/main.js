// Insert html files into index.html
async function loadComponent(className, file) {
	const res = await fetch(file);
	const content = await res.text();
	const element = document.querySelector(`.${className}`);

	if (element) {
		element.innerHTML = content
	}
}

// Changes main's content calling loadComponent
function changeMain(newClass, htmlFile) {
  	const mainElement = document.getElementById("main");
	if (!mainElement) return;

	mainElement.className = newClass;

	loadComponent(newClass, htmlFile);

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

loadLastMain();

// Slides
function changeSlide(className) {
	document.querySelectorAll(`.${className}`).forEach(element => {
		element.classList.toggle("active");
	});
}
