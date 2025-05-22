window.initMatrixEffect = function (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  let letters = "%0178→--QADASENT)--------9XPJ$@1283#ESYN".split("");
  let fontSize = 14;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = new Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(260, 260, 260, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#222b22";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 70);

  window.addEventListener("resize", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = new Array(columns).fill(1); // reset drops for new width
  });
};

function typingList() {
  return {
    fullItems: [
      "Developing and testing trading strategies",
      "Simulating market macro and flash crashes and testing robustness",
      "Replaying and analysing real life data",
      "Reproducing production problems and troubleshooting",
      "Refining analytics (e.g. batch non-linear optimisation)",
      "What-if analysis for “pre”, “at” and “post” trade analytics",
      "Automated integration & performance tests (CI process)",
      "Sales demo tool for clients",
    ],
    typedItems: [],
    currentTypingIndex: 0,
    cursor: "▌",

    async startTyping() {
      for (let i = 0; i < this.fullItems.length; i++) {
        this.currentTypingIndex = i;
        let words = this.fullItems[i].split(" ");
        let item = "";
        for (let w = 0; w < words.length; w++) {
          let word = words[w];
          for (let l = 0; l < word.length; l++) {
            item += word[l];
            this.typedItems[i] = item + (w < words.length - 1 ? " " : "");
            await new Promise((resolve) => setTimeout(resolve, 15)); // letter delay
          }
          if (w < words.length - 1) {
            item += " "; // add space after word
            this.typedItems[i] = item;
            await new Promise((resolve) => setTimeout(resolve, 50)); // small pause between words
          }
        }
        await new Promise((resolve) => setTimeout(resolve, 200)); // pause after full sentence
      }
      this.cursor = "";
    },
  };
}
