const express=require('express');
const path=require('path');
const app=express();


app.use(express.static('./public'));
/*
app.get('/',(req,res)=>
{
	res.sendFile(path.resolve(__dirname,'./29.4web1/index.html'));
});
*/

app.get('/about',(req,res)=>
{
	res.status(200).send('<h1>About page</h1>');
});


app.all('*',(req,res)=>
{
	res.status(404).send('<h1>404 Not Found</h1>');

});




app.listen(5000,(req,res)=>
{
	console.log('Server is listening at port 5000...');
});


