// script.js
const quoteBtn = document.getElementById('quote-btn');
const quoteBox = document.getElementById('quote-box');

const quotes = [
  "Believe you can and you're halfway there.",
  "Every day may not be good... but there's something good in every day.",
  "You are stronger than you think.",
  "Take a deep breath, it’s just a bad day, not a bad life.",
  "Happiness is a direction, not a place.",
  "It's okay to not be okay. Take your time.",
  "Your mind will answer most questions if you learn to relax and wait for the answer."
];

quoteBtn.addEventListener('click', () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.innerText = randomQuote;
  quoteBox.style.display = 'block';
});
