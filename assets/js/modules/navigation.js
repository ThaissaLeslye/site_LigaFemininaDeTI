import { loadComponent } from "./componentLoader.js";
import { renderMembersPanel } from "./members.js";
import { appendImages } from "./gallery.js";
import { iniciarFormulario } from "./forms.js";

export function changeMain(newClass, htmlFile, targetSectionId = null) {
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

  let callback;
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

  // Junta o callback definido com o callback para navegação (targetSection)
  const combinedCallback = () => {
    if (callback) callback();
    afterLoadCallback();
  };

  loadComponent(newClass, htmlFile, combinedCallback);

  localStorage.setItem("currentClass", newClass);
  localStorage.setItem("currentFile", htmlFile);
}

export function loadLastMain() {
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
    if (typeof savedCallback === "function") {
      savedCallback();
    }
    if (savedFile === "mais.html") {
      iniciarFormulario();
    }
  };

  const mainElement = document.getElementById("main");
  if (!mainElement) return;

  mainElement.className = savedClass;

  loadComponent(savedClass, savedFile, callbackComFormulario);
}