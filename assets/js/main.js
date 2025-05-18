import { loadLastMain } from "./modules/navigation.js";
import { changeToActive } from "./modules/toggle.js";
import { setupChangeMainListeners } from "./modules/eventHandlers.js";

// Disponibiliza as funções que precisam ser chamadas globalmente (caso ainda existam usos)
// Por exemplo, se ainda houver algum código que chame "changeToActive" diretamente a partir do HTML,
// você pode mantê-la no escopo global
window.changeToActive = changeToActive;

// Configura os event listeners para os links de navegação
setupChangeMainListeners();

// Carrega o último conteúdo do main assim que o site é carregado
loadLastMain();