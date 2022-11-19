var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange= function() {
if(this.readyState == 4 && this.status == 200) 
{
var myObj = JSON.parse(this.responseText);


var str="";
str+="<table style='width:100%;'>";
str+="<tr>"
str+="<caption>Broj tečajnice: "+myObj[0]["Broj tečajnice"]+" Datum primjene: "+myObj[0]["Datum primjene"]+"</caption>";
str+="<th>Redni broj</th><th>Država</th><th>Šifra valute</th><th>Valuta</th><th>Jedinica</th><th>Kupovni za devize</th><th>Srednji za devize</th><th>Prodajni za devize</th>";
str+="</tr>";
for(var i=0;i<myObj.length;i++)
{
str+="<tr>";
str+="<td>"+i+"</td><td>"+myObj[i]["Država"]+"</td><td>"+myObj[i]["Šifra valute"]+"</td><td>"+myObj[i]["Valuta"]+"</td><td>"+myObj[i]["Jedinica"]+"</td><td>"+myObj[i]["Kupovni za devize"]+"</td><td>"+myObj[i]["Srednji za devize"]+"</td><td>"+myObj[i]["Prodajni za devize"]+"</td>";
str+='</tr>';
}
str+="</table>";



document.getElementById("tecajna").innerHTML=str;

}
};
xmlhttp.open("GET","tecajna_lista.txt",true);
xmlhttp.send();

