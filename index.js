var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomimage = "dice" + randomNumber1 + ".png"; 
var randomimagesrc = "images/"+ randomimage;   

var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomimage2 = "dice" + randomNumber2 + ".png"; 
var randomimagesrc2 = "images/"+ randomimage2;   

var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimagesrc2);

if(randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 win";

}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 win🚩";

}
else{
    document.querySelector("h1").innerHTML="It's a draw";
}
document.getElementById("refresh-text").addEventListener("click", function() {
    window.location.reload();
  });
  

