let index1=0;
showSlides1();
function showSlides1() {
  let i;
  let slides1 = document.getElementsByClassName("reklame fade1");
  
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display="none";  
  }
  index1++;
  if (index1>slides1.length) {index1=1}    
  slides1[index1-1].style.display="block";  
  setTimeout(showSlides1, 2000); 
}

