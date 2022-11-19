const express=require('express');
const app=express();


app.get('/',(req,res)=>{
	console.log('user hit the resource');
	res.send('Home Page');
});

app.get('/about',(req,res)=>{
	console.log('user hit the resource');
	res.send('About Page');
});

app.all('*',(req,res)=>{
	console.log('Resource not found');
	res.status(404).send('<h1>resource not found</h1>');
});

app.listen(5000,()=>
{
	console.log('Server is listening on port 5000');
});
