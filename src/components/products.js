// REDUX
import React, { useEffect} from 'react'
import axios from 'axios';

// COMPONENTS
import Filter from './filter';

// REDUX
import { useDispatch, useSelector } from 'react-redux';

// REDUX REDUCERS
import {addProductsFunc} from '../features/products/products-slice.js';
import {addViewedProductFunc, setAddedItemModalFalse} from '../features/products/product-view-slice.js';

// ICONS
import {GiFireAce} from 'react-icons/gi';

function Products() {

  const dispatch = useDispatch();
  const {initialProducts, isLoading, noProductsFoundModalData} = useSelector((store)=> store.products)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: 'get', 
        url: 'https://firefist-store.herokuapp.com/products'
      })
      const data = response.data;
      dispatch(addProductsFunc(data));
    }
    fetchData();
  },[dispatch])


  return (
    <div className='products-container'>
      <Filter/>

      { noProductsFoundModalData[0] ?
          <h1 className='no-products-modal'>{noProductsFoundModalData[1]}</h1>
        : false
      }

      {isLoading ? <Loader/> : initialProducts.map((item) => {
        const {id, title, image, price} = item;

        return (
          <div key={id} className='product-container' onClick={() => {
            const fetchData = async () => {
              const response = await axios({
                method: 'get', 
                url: `https://firefist-store.herokuapp.com/products/${id}`
              })
              dispatch(setAddedItemModalFalse());
              const data = [response.data];
              dispatch(addViewedProductFunc(data));
          }
          fetchData();
          }}>
            <h4 className='product-heading'>{title}</h4>
            <img src={image} alt={title} className='product-image' />
            <h2>$ {price}</h2>
          </div>
        )
      })}
    <Footer/>
    </div>
  ) 
}
const Loader = () => {
  return <div className='loader'>
  </div>
}

const Footer = () => {

  return (
    <footer className='main-footer-container'>
      <div>
        <GiFireAce className='footer-fire-icon'/>
      </div>
      <div>
        <h1 className='footer-copyright-container'>
        Copyright © 2022 Raven
        </h1>
        <div className='footer-link-container'>
          <h5>Cookies</h5>
          <h5>Security</h5>
          <h5>Terms of Service</h5>
          <h5>Privacy Statement</h5>
        </div>
      </div>
    </footer>
  )
}
export default Products;