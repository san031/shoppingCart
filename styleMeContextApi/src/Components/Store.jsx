import React, { useContext, useState } from 'react'
import { cartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

function Store() {
  const{apiData, addToCart, itemcount}= useContext(cartContext)
  // let itemcount=1

  // const[itemcount,setItemCount] = useState(0)
  return (
    <div>
      <ul  className='grid grid-cols-[1fr_1fr_1fr] w-screen p-6 gap-x-1 gap-y-1'>
        {apiData.map((data,value) => (
          
          <li key={value} className=' grid grid-rows-[1fr_1fr_1fr]  shadow-xl h-100 w-64 bg-white '>
            <Link to={`./${data.id}`}>
            <img src={data.image} height='150vh' width='150vh' alt="" className='flex items-center justify-center m-0.5 p-5' />
            <div className='font-mono text-2xs'>{data.title}</div>
            <div>${data.price}</div>
            </Link>
            {/* {console.log(data.title,data.id)} */}
            <button 
            className='
            transition transform active:scale-95 px-4 py-2 
            cursor-pointer flex items-center
             justify-center bg-black text-white
              h-10 w-40 rounded-2xl float-start mb-0.5 '
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