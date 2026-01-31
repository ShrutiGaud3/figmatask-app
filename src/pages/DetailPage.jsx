import React from 'react'
import shoe1 from '../assets/shoe1.png'
import shoe2 from '../assets/shoe2.png'
import shoe3 from '../assets/shoe3.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'


const DetailPage = () => {

 const {id} = useParams()
 const navigate = useNavigate()

 const [qty , setQty]= useState(1)

 const addToCart =()=>{
     let cart = JSON.parse(localStorage.getItem('cart')) || []

     let existingItem = cart.find((item) => item.id === product.id)
     if(existingItem){
         existingItem.qty += qty
     }else{
      cart.push({...product , qty})
     }

     localStorage.setItem("cart" , JSON.stringify(cart))

     navigate('/cart')
 }


 const shoes = [
  { id: 1, img: shoe1, name: "Off White", price: 56, desc: "Stylish off white shoe" },
  { id: 2, img: shoe2, name: "Black", price: 76, desc: "Premium black shoe" },
  { id: 3, img: shoe3, name: "Blue", price: 87, desc: "Cool blue shoe" },
  { id: 4, img: shoe1, name: "Blue", price: 47, desc: "Cool blue shoe" },
];

  const product = shoes.find((shoe)=> shoe.id == id)

  return (
    <div className="container max-w-7xl mx-auto px-4 py-10">
      
     
      <div className="grid md:grid-cols-2 gap-10">

       
        <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
          <img
            src={product.img}
            alt=""
            className="w-full max-w-xs object-contain"
          />
        </div>

       
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-500 text-sm mb-2">{product.desc}</p>
          <p className="text-2xl font-bold mb-6">{product.price}</p>

         
          <div className="mb-6 border-t flex flex-col  justify-center ">
            <p className="text-sm mb-2 mt-3">Quantity</p>
            <div className="flex items-center border rounded-md w-fit">
              <button onClick={()=> setQty(qty > 1 ? qty - 1 : 1)} className="px-4 py-2">−</button>
              <span className="px-4">{qty}</span>
              <button onClick={()=> setQty(qty + 1)} className="px-4 py-2">+</button>
            </div>
          </div>

         
         <button onClick={addToCart} className="bg-black w-full text-white rounded-xl p-3 block text-center">
  Add to Cart
</button>

        </div>
      </div>

      <div className="grid md:grid-cols-2  gap-10 mt-10">

       
        <div className='md:order-1 order-2'>
          <h3 className="font-semibold text-lg mb-3 border-b pb-2 ">{product.name}</h3>
          <p className="text-gray-600 mb-4">
            {product.desc}
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
            src={product.img}
            alt=""
            className="w-full max-w-xs object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default DetailPage
