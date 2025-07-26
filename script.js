// Quotes API
function showQuote() {
  fetch('https://zenquotes.io/api/random')
    .then(res => res.json())
    .then(data => {
      document.getElementById('quote-box').innerText = data[0].q + " — " + data[0].a;
    })
    .catch(err => {
      document.getElementById('quote-box').innerText = "Stay strong, better days are ahead!";
    });
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
