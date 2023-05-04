import React from 'react'
import Card from './Card'
import useFetch from '../hooks/useFetch';

const List = ({ catId, maxPrice, sort, selectedCart }) => {

    const apiUrl = 'http://localhost:1337/api';

    const { data, isLoading, err } = useFetch(apiUrl + `/products?populate=*&[filters][categories][id]=${catId}${selectedCart.map(item=> `&[filters][sub_categories][id]=${item}`)}&sort=price:${sort}`);

  return (
    <div className='flex items-center gap-6 py-10 mb-10'>
        {isLoading ? 'Loading...' : data?.map(item => (
            <Card item = {item} key={item.id}/>
        ))}
    </div>
  )
}

export default List