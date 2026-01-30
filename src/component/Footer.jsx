import React from 'react'
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex p-5 bg-black text-white items-center justify-center  '>
       
          <div className='container max-w-7xl flex md:flex-row flex-col gap-2  text-white items-center justify-between  '>
              <div className='flex gap-2'>
                 <img src="	https://shoe-figma-file.vercel.app/assets/logo-CNgyYBPp.png" className='w-7 h-7' alt="" />
                <h1 className='font-bold text-xl'>Sun Co.</h1>
               </div>

               <div className=''>© 2023 dol-cards test task. All rights reserved</div>
               <div className='flex gap-2'><FaInstagram /> <FaFacebook /> <FaTwitterSquare />
           </div>
          </div>
      
    </div>
  )
}

export default Footer