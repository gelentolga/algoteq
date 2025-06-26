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

document.addEventListener("alpine:init", () => {
  Alpine.data("tradingFeatures", () => ({
    features: [
      { title: "Algorithmic Trading" },
      { title: "Exchange Matching Engines" },
      { title: "Client Connectivity" },
      { title: "Artificial Intelligence" },
      { title: "Market Simulation" },
      { title: "Market Connectivity" },
      { title: "Order Management Systems (OMS)" },
      { title: "Crossing Engines" },
      { title: "Market Data Distribution" },
      { title: "Smart Order Routing (SOR)" },
      { title: "Risk Management" },
      { title: "Analytics" },
    ],
  }));
});

//contact us
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
let width, height, nodes;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  nodes = Array.from({ length: 70 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    baseRadius: 1.5 + Math.random() * 1,
    pulse: 0,
    pulseDir: 1,
  }));
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  const time = Date.now() * 0.002;

  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];

    // Move
    a.x += a.vx;
    a.y += a.vy;

    if (a.x < 0 || a.x > width) a.vx *= -1;
    if (a.y < 0 || a.y > height) a.vy *= -1;

    // Pulse radius
    a.pulse += 0.03 * a.pulseDir;
    if (a.pulse > 1 || a.pulse < 0) a.pulseDir *= -1;

    const radius = a.baseRadius + Math.sin(time + i) * 0.5 * a.pulse;

    // Draw node
    ctx.beginPath();
    ctx.arc(a.x, a.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#00ffff88";
    ctx.shadowColor = "#00ffffaa";
    ctx.shadowBlur = 8;
    ctx.fill();

    // Draw connections
    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);

        // Hue shifts with distance and time
        const hue = (time * 60 + (dist / 120) * 240) % 360;
        ctx.strokeStyle = `hsla(${hue}, 100%, 75%, ${1 - dist / 120})`;
        ctx.lineWidth = 0.8;
        ctx.shadowColor = `hsla(${hue}, 100%, 75%, 0.6)`;
        ctx.shadowBlur = 8;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(draw);
}

window.addEventListener("resize", resize);
resize();
draw();

// ai page
