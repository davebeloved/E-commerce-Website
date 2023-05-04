import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../redux/cartReducer';
import { makeRequest } from "../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {

  const api = 'http://localhost:1337';
  const apiUrl = 'http://localhost:1337/api';


  const dispatch = useDispatch();
  
  const products = useSelector(state=> state.cart.products);
  console.log(products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51N3BJJCLbVsU2HGchZs7pz0mw064vUU82FWJ6A98FRpeiHXPkBMrDfIUokzoSsAaxNbYM5xrThr0WKlXorGJ2q6o00vDrUlMlq"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post(apiUrl + "/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className='bg-white shadow-lg w-[400px]  absolute border border-black right-6 top-20 z-10 px-4 py-6'>
       <h1 className='font-semibold text-xl mb-4' >Products in your cart</h1>
      {products?.map((item) => (
        <div className="flex items-center mb-10 relative" key={item.id}>
          <img src={api + item.img} alt="" className='w-28 object-cover'/>
          <div className="">
            <h1>{item.title}</h1>
            <p className='text-gray-500'>{item.desc.substring(0, 15)}...</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <BsFillTrashFill
            className="absolute right-2 text-red-600 cursor-pointer"
            onClick={()=> dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="flex items-center justify-between mb-2">
        <span className='font-semibold'>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment} className='bg-blue-600 border-none px-5 py-2 text-white mb-5'>PROCEED TO CHECKOUT</button>
      <span className="inline-block absolute bottom-1 pb-2 left-4  mt-2 cursor-pointer text-red-600" onClick={()=> dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  )
}

export default Cart
