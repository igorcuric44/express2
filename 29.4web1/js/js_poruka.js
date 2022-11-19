document.getElementById("poruka").addEventListener("click",otvoriporuku);
function otvoriporuku() {
let slides = document.getElementsByClassName("posta-container")[0];
slides.style.display="block";
//document.getElementById("poruka").style.display="none";
}

document.getElementsByClassName("closebtn")[0].addEventListener("click",closediv);
//document.getElementById("closex").addEventListener("click",closediv);
function closediv() {
let slides = document.getElementsByClassName("posta-container")[0];
slides.style.display="none";
//document.getElementById("poruka").style.display="block";
}
