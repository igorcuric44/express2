let is_shop_open = true;

let order = ( time, work ) =>{

  return new Promise( ( resolve, reject )=>{  
  if( is_shop_open ){

      resolve( )

    }

    else{

      reject( console.log("Our shop is closed") )

    }} )

  }

