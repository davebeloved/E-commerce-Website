import React from 'react'
import { Link } from 'react-router-dom'
import payment from '../assets/payment2.png'
const Footer = () => {

  const getdate = new Date();

  return (
    <div className='px-10'>
      <div className='flex items-center justify-between gap-x-20 mb-5'>
        <div>
          <h2 className='font-bold'>Categories</h2>
          <div className='flex flex-col'>
              <Link to={'products/1'}>Men</Link>
              <Link to={'products/1'}>Women</Link>
              <Link to={'products/1'}>Children</Link>
              <Link to={'products/1'}>Accessories</Link>
              <Link to={'products/1'}>Shoes</Link>
          </div>
        </div>
        <div>
          <h2 className='font-bold'>Links</h2>
          <div className='flex flex-col'>
              <Link>FAQ</Link>
              <Link>Pages</Link>
              <Link>Stories</Link>
              <Link>Compare</Link>
              <Link>Cookies</Link>
          </div>
        </div>
        <div>
          <h2 className='font-bold'>About Us</h2>
          <div className='w-[300px]'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam a alias animi minima libdunt tenetur, perspiciatis porro dignissimos expedita ullam quas sequi fugiat minima.</p>
          </div>
        </div>
        <div>
          <h2 className='font-bold'>Contact Us</h2>
          <div className='w-[300px]'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam a alias animi minima libdunt tenetur, perspiciatis porro dignissimos expedita ullam quas sequi fugiat minima.</p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-4 py-3'>
          <h2 className='font-semibold text-blue-600'>LamaStore</h2>
        <h4>&copy;Copyrights {getdate.getFullYear()} All Rights Reserved</h4>
        </div>
        <div className='w-[350px]'>
          <img src={payment} alt="" className='w-full h-full object-fit'/>
        </div>
      </div>

    </div>
  )
}

export default Footer