import React from 'react'
import shoe1 from '../assets/shoe1.png'
import { Link } from 'react-router-dom'


const DetailPage = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-10">
      
     
      <div className="grid md:grid-cols-2 gap-10">

       
        <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
          <img
            src={shoe1}
            alt=""
            className="w-full max-w-xs object-contain"
          />
        </div>

       
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold">adidas</h2>
          <p className="text-gray-500 text-sm mb-2">DAILY 3.0 SHOES</p>
          <p className="text-2xl font-bold mb-6">$98.99</p>

         
          <div className="mb-6 border-t flex flex-col  justify-center ">
            <p className="text-sm mb-2 mt-3">Quantity</p>
            <div className="flex items-center border rounded-md w-fit">
              <button className="px-4 py-2">−</button>
              <span className="px-4">1</span>
              <button className="px-4 py-2">+</button>
            </div>
          </div>

         
         <Link to="/cart" className="bg-black w-full text-white rounded-xl p-3 block text-center">
  Add to Cart
</Link>

        </div>
      </div>

      <div className="grid md:grid-cols-2  gap-10 mt-10">

       
        <div className='md:order-1 order-2'>
          <h3 className="font-semibold text-lg mb-3 border-b pb-2 ">Description</h3>
          <p className="text-gray-600 mb-4">
            Energize your look with a fresh take on heritage adidas style.
            The adidas Daily 3.0 Shoes lace up with a classic profile with
            modern suede upper.
          </p>

          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Regular fit</li>
            <li>Lace closure</li>
            <li>Rubber outsole with vulcanized look</li>
            <li>Imported</li>
          </ul>
        </div>

       
        <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center md:order-2 order-1">
          <img
            src={shoe1}
            alt=""
            className="w-full max-w-xs object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default DetailPage
