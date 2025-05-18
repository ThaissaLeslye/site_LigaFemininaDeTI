export function changeToActive(className, element = null) {
  if (element) {
    const isActive = element.classList.contains(className);
    document.querySelectorAll(`.${className}`).forEach((elem) => {
      elem.classList.remove(className);
    });

    if (!isActive) {
      element.classList.add(className);
    }
  } else {
    document.querySelectorAll(`.${className}`).forEach((elem) => {
      elem.classList.toggle("active");
    });
  }
}