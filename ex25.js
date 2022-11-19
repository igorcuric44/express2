const express=require('express');
const app=express();

const {people}=require('./data1.js');

app.use(express.static('./public_module'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/',(req,res)=>
{
res.json(people);
console.log(people);
});


app.get('/api/people',(req,res)=>
{
res.json(people);
});

app.post('/api/login',(req,res)=>
{
//console.log(req.body);

const {name}=req.body;
console.log(req.body);
//res.status(200).send(`Hello ${name}`);
 console.log("Got a POST request for the homepage");

if(name)
{
res.status(200).send(`Hello ${name}`);
}

//res.status(401).send('Please Provide Credentials');
});


app.listen(5000,()=>
{
	console.log('Server is listening on port 5000...');
});


