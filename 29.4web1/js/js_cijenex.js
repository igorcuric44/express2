var myObj=[{"Broj tečajnice":"77","Datum primjene":"21.04.2022","Država":"Australija","Šifra valute":"036","Valuta":"AUD","Jedinica":1,"Kupovni za devize":"5,160279","Srednji za devize":"5,175806","Prodajni za devize":"5,191333"},{"Broj tečajnice":"77","Datum primjene":"21.04.2022","Država":"Kanada","Šifra valute":"124","Valuta":"CAD","Jedinica":1,"Kupovni za devize":"5,532499","Srednji za devize":"5,549146","Prodajni za devize":"5,565793"},{"Broj tečajnice":"77","Datum primjene":"21.04.2022","Država":"Češka","Šifra valute":"203","Valuta":"CZK","Jedinica":1,"Kupovni za devize":"0,308433","Srednji za devize":"0,309361","Prodajni za devize":"0,310289"},{"Broj tečajnice":"77","Datum primjene":"21.04.2022","Država":"Danska","Šifra valute":"208","Valuta":"DKK","Jedinica":1,"Kupovni za devize":"1,012426","Srednji za devize":"1,015472","Prodajni za devize":"1,018518"},{"Broj tečajnice":"77","Datum primjene":"21.04.2022","Država":"Mađarska","Šifra valute":"348","Valuta":"HUF","Jedinica":100,"Kupovni za devize":"2,029681","Srednji za devize":"2,035788","Prodajni za devize":"2,041895"},{"Broj tečajnice":"77","Datum primjene":"21.04.2022","Država":"Japan","Šifra valute":"392","Valuta":"JPY","Jedinica":100,"Kupovni za devize":"5,418664","Srednji za devize":"5,434969","Prodajni za devize":"5,451274"},{"Broj tečajnice":"77","Datum primjene":"21.04.2022","Država":"Norveška","Šifra valute":"578","Valuta":"NOK","Jedinica":1,"Kupovni za devize":"0,790257","Srednji za devize":"0,792635","Prodajni za devize":"0,795013"},{"Broj tečajnice":"77","Datum primjene":"21.04.2022","Država":"Švedska","Šifra valute":"752","Valuta":"SEK","Jedinica":1,"Kupovni za devize":"0,734795","Srednji za devize":"0,737006","Prodajni za devize":"0,739217"},{"Broj tečajnice":"77","Datum primjene":"21.04.2022","Država":"Švicarska","Šifra valute":"756","Valuta":"CHF","Jedinica":1,"Kupovni za devize":"7,321807","Srednji za devize":"7,343839","Prodajni za devize":"7,365871"},{"Broj tečajnice":"77","Datum primjene":"21.04.2022","Država":"Velika Britanija","Šifra valute":"826","Valuta":"GBP","Jedinica":1,"Kupovni za devize":"9,044120","Srednji za devize":"9,071334","Prodajni za devize":"9,098548"},{"Broj tečajnice":"77","Datum primjene":"21.04.2022","Država":"SAD","Šifra valute":"840","Valuta":"USD","Jedinica":1,"Kupovni za devize":"6,939964","Srednji za devize":"6,960847","Prodajni za devize":"6,981730"},{"Broj tečajnice":"77","Datum primjene":"21.04.2022","Država":"Bosna i Hercegovina","Šifra valute":"977","Valuta":"BAM","Jedinica":1,"Kupovni za devize":"3,851021","Srednji za devize":"3,862609","Prodajni za devize":"3,874197"},{"Broj tečajnice":"77","Datum primjene":"21.04.2022","Država":"EMU","Šifra valute":"978","Valuta":"EUR","Jedinica":1,"Kupovni za devize":"7,531943","Srednji za devize":"7,554607","Prodajni za devize":"7,577271"},{"Broj tečajnice":"77","Datum primjene":"21.04.2022","Država":"Poljska","Šifra valute":"985","Valuta":"PLN","Jedinica":1,"Kupovni za devize":"1,626524","Srednji za devize":"1,631418","Prodajni za devize":"1,636312"}]

var str="";




str+="<select id='mySelect1'>";

for(var i=0;i<myObj.length;i++)
{
str+="<option value='"+myObj[i]['Srednji za devize']+":"+myObj[i]['Jedinica']+":"+myObj[i]['Valuta']+"'>"+myObj[i]['Država']+"</option>";
}
str+="</select>";



document.getElementById("demo1").innerHTML=str;

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




