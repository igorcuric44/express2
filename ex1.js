const express=require('express');
const app=express();


app.get('/',(req,res)=>{
	console.log('user hit the resource');
	res.send('Home Page');
});

app.get('/about',(req,res)=>{
	console.log('user hit the resource');
	res.send('Home Page');
});



app.listen(5000,()=>
{
	console.log('Server is listening on port 5000');
});
