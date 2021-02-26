const API_KEY = "apiKey=7L9yLAWDYQdaGOT64cxUwFKUljiLgWsW"

const URL = "https://api.giphy.com/v1"

const RANDOM_END_POINT = "/gifs/random?"

function getGif() {
  // we create a new instance of an HTTP request
  var request = new XMLHttpRequest();
  //we get the text that the user has typed in
  searchTerm = 'cauliflower';
  // we set up the url endpoint we want to reach
  var searchQuery = "&tag=" + searchTerm;
  var requestUrl = URL + RANDOM_END_POINT + API_KEY + searchQuery
  
  // we make the request
  request.open('GET', requestUrl);
  request.responseType = 'json';
  request.send();

  //we do something with the successful response
  request.onload = function() {
    var response = request.response;
    var imageUrl  = response.data.image_url;
    document.getElementById('gif').src = imageUrl
  }
}







