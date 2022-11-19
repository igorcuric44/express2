document.getElementById("myTopnav").addEventListener("click",myFunction);
var strbefore='<div class="container"><ul><li class="open-menux"><a href="javascript:void(0);" class="open-menu">';
var strafter="";
var klasa1="",klasa2="",klasa3="",klasa4="",klasa5="";

let text=window.location.href;

if(text.match(/\/$|index\.html/g)){
klasa1='class="active"';
klasa2="";
klasa3="";
klasa4="";
klasa5="";
}else if(text.match(/\/usluge.html/g))
{
klasa1="";
klasa2='class="active"';
klasa3="";
klasa4="";
klasa5="";
}else if(text.match(/\/cjenik.html/g))
{
klasa1="";
klasa2="";
klasa3='class="active"';
klasa4="";
klasa5="";
}else if(text.match(/\/katalog.html/g))
{
klasa1="";
klasa2="";
klasa3="";
klasa4='class="active"';
klasa5="";
}else if(text.match(/\/kontakt.html/g))
{
klasa1="";
klasa2="";
klasa3="";
klasa4="";
klasa5='class="active"';
}

strafter='<li '+klasa1+'><a href="index.html"  target="_self" ><i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp;Naslovna</a></li><li '+klasa2+'><a href="usluge.html" target="_self" ><i class="fa fa-laptop fa-fw" aria-hidden="true"></i>&nbsp;Proizvodi i usluge</li><li '+klasa3+'><a href="cjenik.html" target="_self" ><i class="fa fa-list fa-fw" aria-hidden="true"></i>&nbsp;Cjenik</a></li><li '+klasa4+'><a href="katalog.html" target="_self" ><i class="fa fa-picture-o" aria-hidden="true"></i>&nbsp;Katalog</a></li><li '+klasa5+'><a href="kontakt.html" target="_self" ><i class="fa fa-phone fa-fw" aria-hidden="true"></i>&nbsp;Kontakt</a></li></ul></div>';

function myFunction() {
	var str="";
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
	str+=strbefore;
	str+='<i class="fa fa-times"></i></a></li>';
	str+=strafter;
	x.innerHTML=str;
  } else {
    x.className = "topnav";
	str+=strbefore;
	str+='<i class="fa fa-bars"></i></a></li>';
	str+=strafter;
			
	x.innerHTML=str;
	
  }
}
