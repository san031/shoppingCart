import React, { useContext } from 'react'
import { cartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

function Store() {
  const{apiData, addToCart}= useContext(cartContext)
  let itemcount=1

  return (
    <div className='bg-blue-100 '>
      <ul  className='grid grid-cols-[1fr_1fr_1fr] '>
        {apiData.map((data,value) => (
          
          <li key={value} className=' grid grid-rows-[1fr_1fr_1fr]  shadow-xl h-109 w-64 m-6 p-2 bg-white '>
            <Link to={`./${data.id}`}>
            <img src={data.image} height='150vh' width='150vh' alt="" className='flex items-center justify-center m-0.5 p-5' />
            <div >{data.title}</div>
            <div>{data.price}</div>
            </Link>
            {/* {console.log(data.title,data.id)} */}
            <button 
            className='cursor-pointer flex items-center justify-center bg-black text-white h-10 w-40 rounded-2xl float-start mb-0.5 '
            onClick={() => addToCart([data.id,data.image,data.price,data.title,itemcount])}>ADD TO CART</button>
            
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Store


// {
//   storeitem.map((item,id) => <div key={id} >
//     <img src={item.image} height='150vh' width='150vh' alt="" />
//   </div> )
// }