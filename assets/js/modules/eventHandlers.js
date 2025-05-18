import { changeMain } from "./navigation.js";

export function setupChangeMainListeners() {
	const links = document.querySelectorAll(".js-change-main");
	links.forEach((link) => {
		link.addEventListener("click", (event) => {
			event.preventDefault();
			const section = link.dataset.section;
			const file = link.dataset.file;
			const target = link.dataset.target || null;

			changeMain(section, file, target); 
		});
	});
}
