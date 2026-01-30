import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import TrendingShoes from './TrendingShoes'

const Home = () => {
  return (
   <>
    <div className='p-5 flex items-center justify-center '>
     <div className='container h-auto    h-[400px] bg-gray-200 rounded-4xl mt-5 p-12 max-w-7xl flex  flex-col-reverse md:flex-row
 items-center justify-between'>
            <div className=' space-y-6 md:text-left  text-center'>
                <span className='text-orange-500 text-2xl font-bold '>25% OFF</span>
                <h1 className='font-bold md:text-5xl text-4xl mt-2'>Summer Sale </h1>
                <p className='text-gray-600 text-lg '>Discover our summer styles with discount</p>
                <button className='bg-black  text-white p-3 md:w-[190px] w-full flex  gap-2 items-center justify-center rounded-md'>Shop Now <FaArrowRight /> </button>
            </div>
           <div className=''>
            <img src="https://shoe-figma-file.vercel.app/assets/shoes-DePB_5Wq.png" alt="" />
           </div>
     </div>
    </div>

    <TrendingShoes/>
   
   </>
  )
}

export default Home