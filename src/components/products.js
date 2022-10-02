import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: 'get', 
        url: 'http://localhost:8000/products'
      })
      const data = response.data;
      setProducts(data);
      setHasLoaded(true);
      console.log(data);
    }
    fetchData();
  },[])
  return (
    <div className='products-container'>
      {hasLoaded && products.map((item) => {
        const {id, title, image, price} = item;

        return (
          <div key={id} className='product-container'>
            <h4 className='product-heading'>{title}</h4>
            <img src={image} alt={title} className='product-image' />
            <h2>$ {price}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default Products;