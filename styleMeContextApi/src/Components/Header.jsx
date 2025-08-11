import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className='flex flex-row bg-amber-100 shadow-xl shadow-gray-500 w-screen gap-x-10 p-4 font-mono text-2xl'>
         <Link className='float-right mb-3.5 p-2'to=''>Home</Link>
         <Link className='float-right mb-3.5 p-2 'to='store'>Store</Link>
         <NavLink 
         className={({isActive}) => {`${isActive}? bg-orange-700: bg-gray-700`} }
         style={{padding:'8px'}}
         to='cart'>Cart </NavLink>  
      </div>

    </div>
  )
}

export default Header