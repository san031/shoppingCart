import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className='flex flex-row m-8 p-0.5 bg-amber-200 shadow-xl shadow-gray-500'>
         <Link className='float-right m-2 p-2'to='/'>Home</Link>
         <Link className='float-right m-2 p-2 'to='store'>Store</Link>
         <NavLink 
         className={({isActive}) => {`${isActive}? bg-orange-700: bg-gray-700`} }
         style={{padding:'10px'}}
         to='cart'>Cart </NavLink>
      </div>

    </div>
  )
}

export default Header