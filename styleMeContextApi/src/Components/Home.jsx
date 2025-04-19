import React from 'react'
// import coverPic from '../images/styleMe_home.jpg'
import coverPic from '../Components/images/styleMe_home.jpg'
import coverPic2 from '../Components/images/styleMe_home2.jpg'
import coverPic4 from '../Components/images/styleMe_home4.jpg'
function Home() {
  return (
   <>
    <div className='grid grid-cols-[1fr_1fr_1fr]  
h-screen p-7 m-7  relative'>

      

        <img src={coverPic} className='opacity-60' alt="" />
        <img src={coverPic2}  alt="" className='px-2 mt-28 opacity-60'/>
      <img src={coverPic4} alt="" className='opacity-60' />
      <p className='z-50 absolute mt-58 mx-30 text-red-950 text-opacity-100 overflow-hidden
bg-[rgba(0,_0,_0,_0.5)] font-extrabold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum expedita doloribus error quibusdam temporibus cumque, labore cupiditate, provident aspernatur numquam maxime dolorem sed minus, sequi inventore. Blanditiis omnis a eligendi.</p>

    </div>
   </>
  )
}

export default Home