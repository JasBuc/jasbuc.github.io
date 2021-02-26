
document.querySelector('html').onclick = function() {
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
    
}