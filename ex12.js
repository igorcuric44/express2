const express=require('express');
const app=express();
const {products}=require('./data1.js');

app.get('/',(req,res)=>
{
res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products',(req,res)=>
{
const newProduct=products.map((product)=>{
const {id,name,gun}=product;
return {id,name,gun}
});
res.json(newProduct);
});

app.get('/api/products/1',(req,res)=>
{
const singleProduct=products.find((product)=>{
product.id===2;
return product.id;
});
res.json(singleProduct);
});



app.listen(5000,()=>
{
	console.log('Server is listening on port 5000...');
});
