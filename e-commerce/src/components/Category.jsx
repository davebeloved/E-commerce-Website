import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {

 
  return (
    <div className='px-10 py-12'>
      <div className=' h-[80vh] flex items-center overflow-hidden gap-3'>
        <div className='flex flex-col flex-1 h-full gap-y-3'>
            <div className='h-[50%] relative'>
                <img src="https://img.freepik.com/free-photo/fashionable-woman-red-coat-black-hat-posing_273443-2430.jpg?size=626&ext=jpg&ga=GA1.1.1501107955.1672954272&semt=robertav1_2_sidr" alt="" className='h-full object-cover'/>
                <Link to={'/products/1'} className='absolute bg-blue-700 text-white px-4 py-1 top-[50%] left-[40%]'>
                    SALES
                </Link>
            </div>
            <div className='h-[50%] relative'>
                <img src="https://img.freepik.com/free-photo/high-fashion-portrait-young-elegant-blonde-woman-black-wool-hat-wearing-oversize-white-fringe-poncho-with-long-grey-dress_273443-3799.jpg?size=626&ext=jpg&ga=GA1.1.1501107955.1672954272&semt=robertav1_2_sidr" alt=""  className='h-full object-cover'/>
                <Link to={'/products/1'} className='absolute bg-blue-200 text-black px-4 py-1 top-[50%] left-[40%]'>
                    WOMEN
                </Link>
            </div>
        </div>
        <div className='flex-1 h-full'>
            <div  className='h-full relative'>
                <img src="https://img.freepik.com/free-photo/medium-shot-woman-posing-with-yellow-sunglasses_23-2149068954.jpg?size=626&ext=jpg&ga=GA1.1.1501107955.1672954272&semt=robertav1_2_sidr" alt=""  className='h-full object-cover'/>
                <Link to={'/products/1'} className='absolute bg-blue-200 text-black px-4 py-1 top-[50%] left-[30%]'>
                    NEW SEASON
                </Link>
            </div>
        </div>
        <div className='flex flex-col flex-2 w-[50%] gap-3'>
            <div className='flex gap-3'>
                <div className='w-full h-full relative'>
                    <img src="https://img.freepik.com/free-photo/bags-girl-african-happy-beautiful_1303-1609.jpg?size=626&ext=jpg&ga=GA1.1.1501107955.1672954272&semt=robertav1_2_sidr" alt=""  className='h-full object-cover w-full'/>
                    <Link to={'/products/1'} className='absolute bg-blue-200 text-black px-4 py-1 top-[50%] left-[40%]'>
                    MEN
                </Link>
                </div>
                <div className='relative'>
                    <img src="https://img.freepik.com/free-photo/joyful-modern-girl-with-wavy-hairstyle-cool-cap-polka-dot-black-blouse-smiling-holding-red-stylish-handbag-lilac-wall_197531-24373.jpg?size=626&ext=jpg&ga=GA1.1.1501107955.1672954272&semt=robertav1_2_sidr" alt=""  className='h-full object-cover w-full'/>
                    <Link to={'/products/1'} className='absolute bg-blue-200 text-black px-4 py-1 top-[50%] left-[40%]'>
                    SHOES
                </Link>
                </div>
            </div>
            <div className='relative'>
                <img src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309652.jpg?size=626&ext=jpg&ga=GA1.1.1501107955.1672954272&semt=robertav1_2_sidr" alt=""  className='h-full object-cover w-full'/>
                <Link to={'/products/1'} className='absolute bg-blue-200 text-black px-4 py-1 top-[30%] left-[40%]'>
                    ACCESSORIES
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
