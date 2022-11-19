var xmlhttp = new XMLHttpRequest();
xmlhttp.onload= function() {
if(this.readyState == 4 && this.status == 200) 
{
var myObj = JSON.parse(this.responseText);


var str="";




str+="<select id='mySelect1' onchange='myFunction1()'>";

for(var i=0;i<myObj.length;i++)
{
str+="<option value='"+myObj[i]['Srednji za devize']+":"+myObj[i]['Jedinica']+":"+myObj[i]['Valuta']+"'>"+myObj[i]['Država']+"</option>";
}
str+="</select>";



document.getElementById("demo1").innerHTML=str;

}
};
xmlhttp.open("GET","tecajna_lista.txt",true);
xmlhttp.send();




document.getElementById("mySelect1").addEventListener("change", myFunction1);
function myFunction1() {
alert("opalio");
  var x = document.getElementById("mySelect1").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
  
var srednji=x.split(':')[0];
var jedinica=x.split(':')[1];
var valuta=x.split(':')[2];
  
let regexp = /(\d+),(\d+)/;

srednji=srednji.replace(regexp,'$1.$2');
srednji=parseFloat(srednji);

edinica=parseFloat(jedinica);
 
strx="";
strx+="<table class='tattoo_valute'>";
strx+="<caption> Valuta "+valuta.toString()+"</caption>";
strx+="<tr><th>Vrijeme rada tetovaze</th><th>Cijena</th></tr>";
strx+="<tr><td>do 3.00h</td><td>"+(400.0/srednji*jedinica).toFixed(2).toString()+"</td></tr>";
strx+="<tr><td>od 3.00h do 6.00h</td><td>"+(800.0/srednji*jedinica).toFixed(2).toString()+"</td></tr>";			
strx+="<tr><td>od 6.00h do 10.00h</td><td>"+(1000.0/srednji*jedinica).toFixed(2).toString()+"</td></tr>";		
strx+="<tr><td>od 10.00h</td><td>"+(1500.0/srednji*jedinica).toFixed(2).toString()+"</td></tr>";			
strx+="<tr><td>kompleksne tetovaze</td><td>cijena po dogovoru</td></tr>";			
strx+="</table>";

  
document.getElementById("tabla2").innerHTML=strx;
  
  
  
}




