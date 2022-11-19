let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };


let is_shop_open = true;

let order = ( time, work ) =>{

  return new Promise( ( resolve, reject )=>{  
  if( is_shop_open ){

      resolve(work() )

    }

    else{

      reject( console.log("Our shop is closed") )

    }} )

  }

order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{
  return order(0000,()=>console.log('production has started'))
})

