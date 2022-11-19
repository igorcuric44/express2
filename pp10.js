let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"]
 }

let order = (fruit_name, call_production) =>{

  setTimeout(function(){

    console.log(`${stocks.Fruits[fruit_name]} was selected`)

// Order placed. Call production to start
   call_production();
  },2000)
};

// 2nd Function

let production = () =>{
 setTimeout(()=>{
    console.log("production has started")
  },0000)
};

// Trigger 👇
order(0, production);
