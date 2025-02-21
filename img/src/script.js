function fetchRandomMeme() {
  fetch("https://meme-api.com/gimme")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("image-container").innerHTML = `
        <img src="${data.url}" alt="Random Meme Image" />
      `;
    })
    .catch(error => console.error("Error fetching meme:", error));
}

document.getElementById("bot-btn").addEventListener("click", fetchRandomMeme);

fetchRandomMeme();