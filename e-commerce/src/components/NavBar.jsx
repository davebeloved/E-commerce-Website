import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsCart, BsFillCartCheckFill } from 'react-icons/bs';
import Cart from './Cart';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const products = useSelector(state=> state.cart.products);
  const [toggleCart, setToggleCart] = useState(false);
  return (
    <div className='px-10 h-[80px] py-5'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-5'>
          <Link to={'products/1'} className='text-xl font-smeibold' >Men</Link>
          <Link to={'products/1'} className='text-xl font-smeibold' >Women</Link>
          <Link to={'products/1'} className='text-xl font-smeibold' >Children</Link>
          <Link to={'products/1'} className='text-xl font-smeibold' >Accessories</Link>

        </div>
        <div>
          <h2 className='font-bold text-2xl'>LamaStore</h2>
        </div>
        <div onClick={() => setToggleCart(!toggleCart)} className='cursor-pointer flex items-center gap-x-5'>
          <Link to={'/'} className='text-xl font-smeibold'>Home</Link>
          <Link className='text-xl font-smeibold'>About</Link>
          <Link className='text-xl font-smeibold'>Contact Us</Link>
          <div className='relative'>
            <BsFillCartCheckFill size={25}  className='cursor-pointer'/>
            <span className='bg-blue-600 text-white rounded-full absolute top-0 left-3 w-2 h-2 flex items-center justify-center p-2 text-[12px]'>{products.length}</span>
          </div>
        </div>
      </div>

      {toggleCart && <Cart /> }
    </div>
  )
}

export default NavBar
