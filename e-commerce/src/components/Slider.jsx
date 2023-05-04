import React, { useState } from 'react'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

const Slider = () => {
    const [slides, setSlides] = useState(0);

    const data = [
'        https://img.freepik.com/free-photo/happy-joyful-afro-woman-dances-with-triumph-against-clothes-rack-prefers-outfits-yellow-colour-wears-fashionable-jacket-jeans-moves-actively-near-home-wardrobe_273609-32741.jpg?size=626&ext=jpg&ga=GA1.1.1501107955.1672954272&semt=robertav1_2_sidr',
    
'        https://img.freepik.com/free-photo/stylish-casual-african-american-man-jeans-jacket-black-beret-clothes-store-looking-new-jacket-mannequin_627829-13413.jpg?size=626&ext=jpg&ga=GA1.1.1501107955.1672954272&semt=robertav1_2_sidr',
    
  '      https://img.freepik.com/free-photo/medium-shot-man-holding-clothes_23-2149241406.jpg?size=626&ext=jpg&ga=GA1.1.1501107955.1672954272&semt=robertav1_2_sidr'
      ]
    

      const nextSlide = () =>{
            setSlides(slides === 2 ? 0 : (prev) => prev + 1 )
      }
      const prevSlide = () =>{
            setSlides(slides === 0 ? 2 : (prev) => prev - 1 )
      }
      
  return (
    <div className='w-[100vw] h-[80vh] px-10 overflow-hidden relative'>
        <div className=' customstyle w-[300vw] h-full flex overflow-hidden' style={{transform: `translateX(-${slides * 100}vw)`}}>
            <img src={data[0]} alt="" className='w-full h-full object-cover'/>
            <img src={data[1]} alt="" className='w-full h-full object-cover'/>
            <img src={data[2]} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='absolute top-52 flex items-center justify-between w-full px-2'>
            <MdOutlineArrowBackIos onClick={prevSlide} size={30} className='bg-white text-yellow-500 rounded-fullp-2 cursor-pointer'/>
            <MdOutlineArrowForwardIos onClick={nextSlide} size={30} className='bg-white text-yellow-500 rounded-fullp-2 absolute right-16 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Slider