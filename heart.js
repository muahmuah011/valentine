const hearts = document.getElementById("hearts");
const emojis = ["💖💝😘🫶🏻", "💘", "💝", "💖😘🫶🏻❤️","😘","🫶🏻"];
const isIphone = /iPhone/.test(navigator.userAgent);

function createHeart() {
  if (hearts.children.length > 25) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 16 + 20 + "px";
  heart.style.animationDuration = Math.random() * 2 + 4 + "s";

  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, isIphone ? 700 : 300);