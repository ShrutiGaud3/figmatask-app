import React from 'react'
import shoe1 from '../assets/shoe1.png'
import { Link } from 'react-router-dom'

const AddCartPage = () => {
  return (
   <div className='flex min-h-screen justify-center items-start py-4'>
     <div className='container max-w-7xl h-auto p-3 gap-4  flex md:flex-row flex-col-reverse items-center justify-between'>
      
        <div className='md:w-[70%]  w-full  space-y-4'>
          <h1 className='text-2xl font-semibold'>Your Bag</h1>
            <div className='flex items-center shadow-sm rounded-xl p-2 '>
              <div className='bg-gray-300 rounded-xl h-32 w-32'>
                <img src={shoe1} className='h-full w-full object-contain' alt="" />
              </div>
              <div className='flex items-center justify-between  w-full md:px-5 px-2'>
               
                   <div className=' flex flex-col gap-4'>
                   <h1 className='text-xl font-bold'>Nike</h1>
                  <p className='text-gray-500'>Nike air force premium</p>
                 <span className='flex items-center gap-3'>
                   <div className="flex items-center border rounded-md w-fit">
                 <button className="px-4 py-2">−</button>
                  <span className="px-4">1</span>
                 <button className="px-4 py-2">+</button>
                </div>
                <p>Remove</p>
                 </span>
                   </div>
                   <div>
                    <h1 className='text-xl font-bold'>$56</h1>
                   </div>
               
              </div> 
            </div>

            {/* 2  */}
            <div className='flex items-center shadow-sm rounded-xl p-2 '>
              <div className='bg-gray-300 h-32 w-32 rounded-xl '>
                <img src={shoe1} className='h-full w-full object-contain' alt="" />
              </div>
              <div className='flex items-center justify-between  w-full md:px-5 px-2 '>
               
                   <div className=' flex flex-col gap-4'>
                   <h1 className='text-xl font-bold'>Nike</h1>
                  <p className='text-gray-500'>Nike air force premium</p>
                  <span className='flex items-center gap-3'>
                   <div className="flex items-center border rounded-md w-fit">
                 <button className="px-4 py-2">−</button>
                  <span className="px-4">1</span>
                 <button className="px-4 py-2">+</button>
                </div>
                <p>Remove</p>
                 </span>
                   </div>
                   <div>
                    <h1 className='text-xl font-bold'>$56</h1>
                   </div>
               
              </div> 
            </div>

            
        </div>
        <div className='md:w-[30%] p-4 w-full shadow-md rounded-xl   '>
               <div className='flex flex-col gap-3 border-b'>
                 <h1 className='font-semibold text-3xl'>Summary</h1>
                  <span className='flex items-center  justify-between'>
                  <p className=''>Subtotal</p>
                  <p>$56</p>
                </span>
                 <span className='flex items-center  justify-between'>
                  <p className=''>Shipping and Delivery</p>
                  <p>$56</p>
                </span>
                 <span className='flex items-center justify-between'>
                  <p className=''>Tax</p>
                  <p>$56</p>
                </span>
                 <span className='flex items-center mb-3 justify-between'>
                  <p className=''>Discount</p>
                  <p>$56</p>
                </span>
               </div>
               <div>
                <span className='flex items-center my-3 justify-between'>
                  <h3 className='font-bold'>Total</h3>
                  <h3>$56</h3>
                </span>
               <Link
                to="/" className="bg-black w-full text-white rounded-xl p-3 block text-center">
          Checkout
        </Link>

               </div>
        </div>
    </div>
   </div>
  )
}

export default AddCartPage