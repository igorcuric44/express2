let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open = true;

function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }

      else{
         reject(console.log("Shop is closed"))
      }
    });
}

async function kitchen(){
   try{

// time taken to perform this 1 task
     await time(2000)
     console.log(`${stocks.Fruits[0]} was selected`)
   }

   catch(error){
     console.log("Customer left", error)
   }

   finally{
      console.log("Day ended, shop closed")
    }
}

// Trigger
kitchen();

