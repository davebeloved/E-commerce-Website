import React from 'react'
import Slider from '../components/Slider'
import FeaturedProducts from '../components/FeaturedProducts'
import Category from '../components/Category'
import Contact from '../components/Contact'

const Home = () => {


  return (
    <div>
      <Slider />
      <FeaturedProducts type = 'featured'/>
      <Category />
      <FeaturedProducts type = 'trending'/>
      <Contact />
    </div>
  )
}

export default Home
