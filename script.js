
//not working, need to debug

let cauliImage = document.getElementById('cauli_img');
cauliImage.OnClick = function() {
    let cauliSrc = cauliImage.getAttribute('src');
    if(cauliSrc === 'cauli.jpg') {
        document.querySelector('h2').textContent = 'This is a broccoli';
        cauliImage.setAttribute('src','broc.png');
        document.getElementById("link").style.visibility = "hidden";
    } else {
        document.querySelector('h2').textContent = 'This is a cauliflower';
        cauliImage.setAttribute('src','cauli.jpg');
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