const myHeading = document.querySelector('h2');
let myImage = document.querySelector('img');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'cauli.jpg') {
        myHeading.textContent = 'This is a broccoli';
        myImage.setAttribute('src','broc.png');
        document.getElementById("link").style.visibility = "hidden";
    } else {
        myHeading.textContent = 'This is a cauliflower';
        myImage.setAttribute('src','cauli.jpg');
        document.getElementById("link").style.visibility = "visible";
    }
}

function getGif() {
  const API_KEY = "apiKey=7L9yLAWDYQdaGOT64cxUwFKUljiLgWsW"
  const URL = "https://api.giphy.com/v1/gifs/random?"
  const TAG = "&tag=cauliflower";
  var requestUrl = URL + API_KEY + TAG;

  fetch(requestUrl)
  .then(response => response.json())
  .then(data => document.getElementById('gif').src = data.imageUrl);
}