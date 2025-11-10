import React, {  useContext } from 'react'
import { cartContext } from '../Context/CartContext'

function Cart() {

  const{cartItems} = useContext(cartContext)

  
  // useEffect(() => {
  //   {cartItems.map((items) => (console.log(totalCount+=items)))}
  // }, [cartItems])
  


  
  return (
    <div>

      <ul>
      {
      cartItems.map((item,id) => 
      <li key={id} className='flex flex-row justify-center items-center gap-2 h-36 w-full shadow-md shadow-orange-300'>
        <img src={item[1]} className='w-24 h-24'></img>
        <div>${item[2]}</div>
        <div>{item[3]}</div>
         <hr></hr></li>
      )
    }
      </ul>


      <div>
        {/* {{cartItems.length > 0 ? "Total: $" + cartItems.reduce((acc, item) => {
            return (acc + (item.price * item.qty))
          }} */}

          {cartItems.length>0 ?"Total Price : $" +cartItems.reduce((acc,item) => {return (acc+item[2])},0): "EMPTY CART"}
          </div>
    </div>
  )
}

export default Cart