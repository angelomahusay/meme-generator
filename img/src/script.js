// --------------This is the first logic---------------

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     document.getElementById("image-container").innerHTML = `
//       <img src="${data.message}" alt="Random Dog Image" />
//     `;
//   })
//   .catch(error => console.error("Error fetching image:", error));


//DOGggggggggggggg----------------------
// Function to fetch and display a random dog image
// function fetchRandomDogImage() {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       document.getElementById("image-container").innerHTML = `
//         <img src="${data.message}" alt="Random Dog Image" />
//       `;
//     })
//     .catch(error => console.error("Error fetching image:", error));
// }

// // Attach event listener to the button
// document.getElementById("bot-btn").addEventListener("click", fetchRandomDogImage);

// // Fetch an initial random image on page load
// fetchRandomDogImage();


//Catttttttttttt
// Function to fetch and display a random cat image
// function fetchRandomCatImage() {
//   fetch("https://api.thecatapi.com/v1/images/search")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       document.getElementById("image-container").innerHTML = `
//         <img src="${data[0].url}" alt="Random Cat Image" />
//       `;
//     })
//     .catch(error => console.error("Error fetching image:", error));
// }

// // Attach event listener to the button
// document.getElementById("bot-btn").addEventListener("click", fetchRandomCatImage);

// // Fetch an initial random image on page load
// fetchRandomCatImage();


// MEMEEEEEE
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

// Attach event listener to the button
document.getElementById("bot-btn").addEventListener("click", fetchRandomMeme);

// Fetch an initial random meme on page load
fetchRandomMeme();


//MONKEYyyyyyyyy
// function fetchRandomMonkeyMeme() {
//   fetch("https://meme-api.com/gimme/monkeymemes")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       document.getElementById("image-container").innerHTML = `
//         <img src="${data.url}" alt="Random Monkey Meme" />
//         <p>${data.title}</p>
//       `;
//     })
//     .catch(error => console.error("Error fetching monkey meme:", error));
// }

// // Attach event listener to the button
// document.getElementById("bot-btn").addEventListener("click", fetchRandomMonkeyMeme);

// // Fetch an initial random monkey meme on page load
// fetchRandomMonkeyMeme();

//IT HUMOR
// function fetchRandomTechMeme() {
//   fetch("https://meme-api.com/gimme/ProgrammerHumor")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       document.getElementById("image-container").innerHTML = `
//         <img src="${data.url}" alt="Tech Meme" />
//       `;
//     })
//     .catch(error => console.error("Error fetching meme:", error));
// }

// // Attach event listener to the button
// document.getElementById("bot-btn").addEventListener("click", fetchRandomTechMeme);

// // Fetch an initial random meme on page load
// fetchRandomTechMeme();




