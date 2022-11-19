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

app.get('/api/products/:productID',(req,res)=>
{
//const singleProduct=products.find((product)=>product.id===5 || product.name==="tank t90");
//console.log(req);
console.log(req.params);

const {productID}=req.params;

const singleProduct=products.find((product)=>product.id===Number(productID) );

if(!singleProduct){
return res.status(404).send('Product Does Not Exist');
}

console.log(singleProduct);
res.json(singleProduct);


});

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>
{
console.log(req.params);
res.send('Hello World');

});

app.get('/api/vi/query',(req,res)=>
{
console.log(req.query);

const {search,limit}=req.query;
let sortedProducts=[...products];

if(search){
sortedProducts=sortedProducts.filter((product)=>
{ return product.name.startsWith(search)

})}

if(limit){
sortedProducts=sortedProducts.slice(0,Number(limit));
}

if(sortedProducts.length<1)
{
//res.status(200).send("Length smaller than 1");
return res.status(200).json({succes:true,data:[]});
}


res.status(200).json(sortedProducts);
//res.send('Hello World');

});


app.listen(5000,()=>
{
	console.log('Server is listening on port 5000...');
});


