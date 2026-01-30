import React from 'react'
import shoe1 from '../assets/shoe1.png'
import shoe2 from '../assets/shoe2.png'
import shoe3 from '../assets/shoe3.png'
import { Link } from 'react-router-dom'

const TrendingShoes = () => {
  return (
    <div className='flex p-5 items-center justify-center mt-3 mb-3'>
        <div className='container space-y-3  max-w-7xl'>
            <h1 className='text-2xl font-bold'>Explore our latest drops</h1>
            <div className=' grid md:grid-cols-4 grid-cols-1 gap-2'>
                <div className='hover:shadow-lg rounded-xl transition-shadow duration-300 space-y-3 p-3'>
                    <div className='bg-gray-200 h-48 w-full rounded-xl'>
                        <Link to={'/detail'}>
                        <img  className="h-full w-full object-contain" src={shoe1} alt="" />
                        </Link>
                    </div>
                    <div>
                       <h1 className='text-lg font-bold '>Off White</h1>
                       <p className='text-gray-500'>$56</p>
                    </div>
                </div>

                <div className='hover:shadow-lg rounded-xl transition-shadow duration-300  space-y-3 p-3'>
                    <div className='bg-gray-200 rounded-xl h-48 w-full '>
                       <Link to={'/detail'}>
                        <img  className="h-full w-full object-contain"  src={shoe2} alt="" />
                        </Link>
                    </div>
                    <div>
                       <h1 className='text-lg font-bold '>Off White</h1>
                       <p className='text-gray-500'>$56</p>
                    </div>
                </div>

                <div className='hover:shadow-lg rounded-xl transition-shadow duration-300  space-y-3 p-3'>
                    <div className='bg-gray-200 rounded-xl h-48 w-full '>
                         <Link to={'/detail'}>
                        <img  className="h-full w-full object-contain" src={shoe3} alt="" />
                        </Link>
                    </div>
                    <div>
                       <h1 className='text-lg font-bold '>Off White</h1>
                       <p className='text-gray-500'>$56</p>
                    </div>
                </div>

                <div className='hover:shadow-lg rounded-xl transition-shadow duration-300  space-y-3 p-3'>
                    <div className='bg-gray-200 rounded-xl h-48 w-full'>
                         <Link to={'/detail'}>
                        <img  className="h-full w-full object-contain" src={shoe1} alt="" />
                        </Link>
                    </div>
                    <div>
                       <h1 className='text-lg font-bold '>Off White</h1>
                       <p className='text-gray-500'>$56</p>
                    </div>
                </div>
               

            </div>
        </div> 

    </div>
  )
}

export default TrendingShoes