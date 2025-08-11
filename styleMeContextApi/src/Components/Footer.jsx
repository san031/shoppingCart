import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <div className='flex flex-row shadow-gray-500 p-0.5 shadow-xl bg-amber-100 w-screen font-mono text-2xl '>
        <Link className='p-5' to='#'>Contact Us</Link>
        <Link className='p-5'to='#'>About</Link>
        <Link className='p-5' to='#'>Blog</Link>
      </div>
    </div>
  )
}

export default Footer