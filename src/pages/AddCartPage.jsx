import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

const AddCartPage = () => {

  const [cart , setCart] = useState([])

  useEffect(()=>{
     const storedCart = JSON.parse(localStorage.getItem('cart')) || []
     setCart(storedCart)
  },[])
 
  const increaseQty = (id)=>{ 
     const updatedCart = cart.map((item)=> item.id === id ? {...item , qty : item.qty + 1} : item)
     setCart(updatedCart)
     localStorage.setItem("cart" , JSON.stringify(updatedCart))
  }

  const descreaseQty = (id)=>{
    const updatedCart = cart.map((item)=> item.id === id ? {...item , qty : item.qty > 1 ? item.qty - 1 : 1 } : item)
    setCart(updatedCart)
    localStorage.setItem("cart" , JSON.stringify(updatedCart))
  }

const removeItem = (id) => {
  const updatedCart = cart.filter(item => item.id !== id);
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

const total = cart.reduce((total , item) => total + item.price * item.qty , 0)

  return (
   <div className='flex min-h-screen justify-center items-start py-4'>
     <div className='container max-w-7xl h-auto p-3 gap-4  flex md:flex-row flex-col-reverse items-center justify-between'>
      
        <div className='md:w-[70%]  w-full  space-y-4'>
          <h1 className='text-2xl font-semibold'>Your Bag</h1>
            {
              cart.map((items)=> {
                return(
                  <div className='flex items-center shadow-sm rounded-xl p-2 '>
              <div className='bg-gray-300 rounded-xl h-32 w-32'>
                <img src={items.img} className='h-full w-full object-contain' alt="" />
              </div>
              <div className='flex items-center justify-between  w-full md:px-5 px-2'>
               
                   <div className=' flex flex-col gap-4'>
                   <h1 className='text-xl font-bold'>{items.name}</h1>
                  <p className='text-gray-500'>{items.desc}</p>
                 <span className='flex items-center gap-3'>
                   <div className="flex items-center border rounded-md w-fit">
                 <button onClick={()=> descreaseQty(items.id)} className="px-4 py-2">−</button>
                  <span className="px-4">{items.qty}</span>
                 <button onClick={()=> increaseQty(items.id)} className="px-4 py-2">+</button>
                </div>
                <button onClick={()=> removeItem(items.id)}>Remove</button>
                 </span>
                   </div>
                   <div>
                    <h1 className='text-xl font-bold'>{items.price}</h1>
                   </div>
               
              </div> 
            </div>
                )
              })
            }

          

            
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
                  <p>$10</p>
                </span>
                 <span className='flex items-center justify-between'>
                  <p className=''>Tax</p>
                  <p>$0.1</p>
                </span>
                 <span className='flex items-center mb-3 justify-between'>
                  <p className=''>Discount</p>
                  <p>$1</p>
                </span>
               </div>
               <div>
                <span className='flex items-center my-3 justify-between'>
                  <h3 className='font-bold'>Total</h3>
                  <h3>${total}</h3>
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