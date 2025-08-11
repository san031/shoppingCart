import React from 'react'
// import coverPic from '../images/styleMe_home.jpg'

import shopper from '../Components/images/shopper.png'
function Home() {
  return (
   <>
    <div className='grid grid-cols-[1fr_1fr_1fr]  h-screen p-7 m-20  relative'>
      <img src={shopper} alt=""/>
      <p className='border-black text-red-950 font-extrabold ml-56 '>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Illum expedita doloribus error quibusdam temporibus cumque, labore cupiditate, provident aspernatur 
   numquam maxime dolorem sed minus, sequi inventore. Blanditiis omnis a eligendi.</p>

    </div>
   </>
  )
}

export default Home