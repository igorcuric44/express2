function kitchen(){

  return new Promise ((resolve, reject)=>{
    if(false){
       resolve(console.log("promise is fulfilled"))
    }

    else{
        reject(console.log("error caught here"))
    }
  })
}

kitchen()  // run the code
.then(()=>{return kitchen()})    // next step
.then(()=>{return kitchen()})    // next step
.catch(()=>{
  console.log("Customer left")
})   // error caught here
.finally(()=>{
  console.log("Done")
}) // end of the promise [optional]

