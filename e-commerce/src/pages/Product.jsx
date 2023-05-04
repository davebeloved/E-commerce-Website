import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { GrCompare } from "react-icons/gr";
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';


const Product = () => {
const [imageChage, setImageChange] = useState("img");
const [quantity, setQuantity] = useState(1);
const id = useParams().id
const apiUrl = 'http://localhost:1337/api';
const api = 'http://localhost:1337';


const { data, isLoading, err } = useFetch(apiUrl + `/products/${id}?populate=*`);

const dispatch = useDispatch();


  return (
    <div className='px-10 flex gap-x-10 mb-20'>
      <div className='flex gap-x-2'>
        <div className='w-[150px] space-y-2'>
          <img src={api + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e=> setImageChange("img")} className='cursor-pointer'/>
          <img src={api + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e=> setImageChange("img2")} className='cursor-pointer'/>
        </div>
        <div className='w-[400px] h-[500px]'>
          <img src={api + data?.attributes[imageChage]?.data?.attributes?.url} alt="" className='w-full h-full object-cover'/>
        </div>
      </div>
      <div className='space-y-3'>
        <div className='space-y-3'>
          <h2 className='font-semibold text-2xl'>{data?.attributes?.title}</h2>
          <h4 className='text-2xl font-bold text-blue-600'>${data?.attributes?.price}</h4>
          <p className='text-gray-400'>{data?.attributes?.desc}</p>
        </div>
        <div className='flex items-center gap-x-3'>
            <AiOutlineMinus onClick={e=>setQuantity(prev=> quantity === 1 ? 1 : prev - 1)} className='cursor-pointer'/>
            <span className='text-gray-700'>{quantity}</span>
            <AiOutlinePlus onClick={e=>setQuantity(prev=> prev + 1)} className='cursor-pointer'/>
        </div>
        <div>
          <button className='flex items-center gap-x-5 bg-blue-800 text-white px-5 py-3 border-none' onClick={()=> dispatch(addToCart({
            id:data.id,
            title:data.attributes.title,
            desc:data.attributes.desc,
            price:data.attributes.price,
            img:data.attributes.img.data.attributes.url,
            quantity
          }))}>
            <BsFillCartCheckFill />
            ADD TO CART
          </button>
        </div>
        <div className='flex gap-x-5 text-blue-500'>
          <div className='flex items-center gap-x-3'>
            <GiSelfLove />
            <span>ADD TO WISH LIST</span>
          </div>
          <div className='flex items-center gap-x-3'>
            <GrCompare className=''/>
            <span>ADD TO COMPARE</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product