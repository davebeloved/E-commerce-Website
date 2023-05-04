import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {

    const api = 'http://localhost:1337';

  return (
    <div className='py-5'>
        <Link to={`/product/${item.id}`}>
        <div className='flex flex-col  relative'>
            <div className='h-[400px] w-[240px]  relative image'>
                 {item?.attributes?.isNew && <span className='absolute z-[3] bg-white px-2 top-1 left-1'>New Season</span> }
                <img src={api + item?.attributes?.img?.data?.attributes?.url} alt="" className='mainImg' />
                <img src={api + item?.attributes?.img2?.data?.attributes?.url} alt="" className='secondImg' />
        
                
            </div>
       
            <div className='pt-2'>
                <h2 className='font-bold'>{item?.attributes?.title}</h2>
            </div>
            <div className='flex items-center gap-x-4'>
                <p className='text-gray-500 line-through'>${item.oldPrice || item?.attributes?.price + 20 }</p>
                <p>${item?.attributes?.price}</p>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default Card