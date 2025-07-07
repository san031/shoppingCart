import React, { useContext, useState } from 'react'
import { cartContext } from '../Context/CartContext'
import { useParams } from 'react-router-dom'

function ProductDescription() {

  const[itemcount, setItemCount] = useState(0)
  const increment =() =>{
    setItemCount((prev) => prev+1)
  }
  const decrement =()=>{
    if (itemcount<=0){
      return;}
    setItemCount((prev) => prev-1)

  }
  let {id}=useParams()
  const {apiData,addToCart} = useContext(cartContext)
  return (
    <div>
      {
        apiData.map((item,value) => item.id==`${id}` ?
        // <div className='flex flex-row' key={value}>
        // <img  className='w-28 h-32' src={item.image}></img>
        // {item.price}
        // {item.title}
        // <button className='h-7 w-7 rounded-full border-2 items-center justify-center' onClick={() =>increment()}>+</button>
        // <input type="number" min="0" value={itemcount}  readOnly className='outline  h-6 w-20 '/>
        // <button className='h-7 w-7 rounded-full border-2 items-center justify-center' onClick={decrement}>-</button>

        // <button onClick={() => addToCart([item.price, item.title], itemcount)}>ADD TO CART</button>
        // </div>
        <div className='grid grid-rows-[3fr_2fr] ' key={value}>
          <div className=' h-[70vh] w-[90vh] ml-72 mt-6 flex items-center justify-center flex-row shadow-xl shadow-gray-500'>
            <div className='grid grid-row-[2fr_1fr]'>
              <div className='  ml-6  '>
                <img src={item.image}  alt=""  width="200" height="200" className="rounded-t-lg" />
              </div>
              <div className='border-2 rounded-lg m-8 p-0.5 border-emerald-700' >
                
                <p className='ml-5 font-bold'>{item.title}</p>
                <p>{`$ ${item.price}`}</p>
                <button type="button" 
                className='outline rounded-full  h-8 w-8 text-2xl bg-black text-white text-center text-bold'
                onClick={() => increment()}>+</button>
                <input type="number"
                className='outline rounded-md m-2 p-0.5'
                min={0}
                value={itemcount} readOnly/>
                <button type="button" 
                className='outline rounded-full  h-8 w-8  text-2xl bg-black text-white text-center text-bold'
                onClick={() => decrement()}>-</button>

                <button className=' m-8 rounded-md p-1 cursor-pointer bg-gray-700 text-white '
                onClick={() => 
                  // <Cart imagevalue={imageUrl} productTitle={title} productPrice={price} productCount={count}/>
                  // console.log({item.price})
                  addToCart([item.id,item.image,item.price,item.title,itemcount])
                 
                }
                >ADD TO CART</button>  {/* iss button pr click krne se cart component me imageUrl 
                productTitle  productPrice productCount render hona chahiye */}
              </div>
            </div>

          </div>

          <div className='h-[20vh] w-[90vh] ml-72 mt-20'><p>{item.description }</p></div>
        </div>
        : "")
      }
      
    </div>
  )
}

export default ProductDescription