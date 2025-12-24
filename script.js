for (let i = 0; i < 40; i++) {
  let snow = document.createElement("div");
  snow.innerHTML = "❄";
  snow.style.position = "fixed";
  snow.style.top = Math.random() * 100 + "vh";
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.fontSize = Math.random() * 12 + 10 + "px";
  snow.style.opacity = Math.random();
  snow.style.pointerEvents = "none";
  snow.style.animation = "fall " + (Math.random() * 5 + 5) + "s linear infinite";
  document.body.appendChild(snow);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  0% { transform: translateY(-10vh); }
  100% { transform: translateY(110vh); }
}
`;
document.head.appendChild(style);
