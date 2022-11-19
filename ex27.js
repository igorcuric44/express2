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

	const peoplex={
			id:people.length+1,
			name:req.body.name
		};

	people.push(peoplex);


	if(name)
	{
	//res.status(200).send(`Hello ${name}`);
	res.json(people);
	}

//res.status(401).send('Please Provide Credentials');
});


app.put('/api/login/:id',(req,res)=>
{
	const peoplex=people.find(c=>c.id===parseInt(req.params.id));
	if(!peoplex) res.status(404).send('The course with the given ID was not found.');

	console.log(peoplex);
	
	res.send(peoplex);

});

app.delete('/api/login/:id',(req,res)=>
{
	const peopley=people.find(c=>c.id===parseInt(req.params.id));

	const index=people.indexOf(peopley);
	people.splice(index,1);
	
	console.log(peopley);
	
	res.send(peopley);

});


app.listen(5000,()=>
{
	console.log('Server is listening on port 5000...');
});

