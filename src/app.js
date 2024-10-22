let Numbers = [
  "D",
  "I",
  "A",
  "5",
  "N",
  "A",
  "22",
  "G",
  "O",
  "M",
  "3",
  "8",
  "3"
];
let icon = ["♦", "♥", "♠", "♣"];
// this one is for my numbers
let NumbersAleatorio = Numbers[Math.floor(Math.random() * Numbers.length)];

// this one for my icon
let iconAleatorio = icon[Math.floor(Math.random() * icon.length)];

// random for my number card
document.querySelector(".medium").textContent = NumbersAleatorio;

// random for my icon
let elementomyicons = document.querySelectorAll(".heart");
elementomyicons.forEach(function(elemento) {
  elemento.textContent = iconAleatorio;
});
