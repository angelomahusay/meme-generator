//MEME API
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

document.getElementById("meme-btn").addEventListener("click", fetchRandomMeme);

fetchRandomMeme();

//DOG API

function fetchRandomDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("image-container").innerHTML = `
        <img src="${data.message}" alt="Random Dog Image" />
      `;
    })
    .catch(error => console.error("Error fetching image:", error));
}

document.getElementById("dog-btn").addEventListener("click", fetchRandomDogImage);

fetchRandomDogImage();

//CAT API
function fetchRandomCatImage() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("image-container").innerHTML = `
        <img src="${data[0].url}" alt="Random Cat Image" />
      `;
    })
    .catch(error => console.error("Error fetching image:", error));
}

document.getElementById("cat-btn").addEventListener("click", fetchRandomCatImage);

fetchRandomCatImage();

//QUOTE API
async function fetchQuote() {
    try {
        const response = await fetch('https://stoic-quotes.com/api/quote');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        document.querySelector('.quote').textContent = `"${data.text}"`;
        document.querySelector('.author').textContent = `- ${data.author}`;
    } catch (error) {
        document.querySelector('.quote').textContent = "Failed to fetch quote. Try again.";
        document.querySelector('.author').textContent = "";
    }
}


