export async function loadComponent(className, file, callback) {
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