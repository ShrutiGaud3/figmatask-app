import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-center  border-b border-gray-300'>
        <div className='container max-w-7xl p-3   '>
            <nav className='flex items-center justify-between'>
               <Link to={'/'} className='flex gap-2'>
                 <img src="	https://shoe-figma-file.vercel.app/assets/logo-CNgyYBPp.png" className='w-7 h-7' alt="" />
                <h1 className='font-bold text-xl'>Sun Co.</h1>
               </Link>
                <a className='border flex gap-2 items-center justify-center p-2 px-3 border-1 rounded-md '><CiShoppingCart className='h-5 w-5' /> View Cart</a>
            </nav>
        </div>
    </div>
  )
}

export default Navbar