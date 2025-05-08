document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".boot-line");

  lines.forEach((line, index) => {
    const delay = index * 600 + Math.random() * 300;

    setTimeout(() => {
      startFlicker(line);
    }, delay);
  });

  function startFlicker(element) {
    let flickers = 0;
    const maxFlickers = 6;

    const flickerInterval = setInterval(() => {
      element.classList.toggle("opacity-0");
      element.classList.toggle("opacity-100");

      flickers++;
      if (flickers >= maxFlickers) {
        clearInterval(flickerInterval);
        element.classList.remove("opacity-0");
        element.classList.add("opacity-100");
      }
    }, 80 + Math.random() * 100);
  }
});
