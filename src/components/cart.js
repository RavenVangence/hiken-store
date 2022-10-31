import React from 'react'
// import axios from 'axios';
//REDUX
import {useDispatch, useSelector} from 'react-redux'

//ICONS
import {TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/ti'
import { ImCross } from "react-icons/im";
import { setIsCartOpenFalse, increaseAmount, decreaseAmount, setCartTotal, removeItem, setClearCart } from '../features/products/cart-slice';
import { useEffect } from 'react';

function Cart() {
    const dispatch = useDispatch();
    const {cartItems, cartTotal} = useSelector((store) => store.cartSlice)

    useEffect(() => {
      dispatch(setCartTotal())
    }, [cartItems])

  return <section className='cart-container'>
    <div className='cart-heading-container'>
      {cartItems.length === 0 ? <h2>Your Shopping Cart Is Empty</h2> : <h1>Shopping Cart</h1>}
      <button className='cart-cross-icon-btn' onClick={() => dispatch(setIsCartOpenFalse())}>
      <ImCross className='cart-cross-icon'/>
      </button>
    </div>
    {
      cartItems.map((item) => {
        const {id, title, price, amount, image} = item;

        return <div className='cart-item-container' key={id}>
          <img src={image} alt={title} id='cart-item-image'/>
          <div className='cart-middle-info-container'>
            <h4>{title}</h4>
            <h5>${price}</h5>
            <button onClick={() => dispatch(removeItem({id, amount}))}>
              remove item
            </button>
          </div>
          <div className='cart-item-btn-container'>
            <button onClick={() => dispatch(increaseAmount(id))}>
              <TiArrowSortedUp className='increase-decrease-icons'/>
            </button>
              {amount}
            <button onClick={() => dispatch(decreaseAmount(id))}>
              <TiArrowSortedDown className='increase-decrease-icons'/>
            </button>
          </div>
        </div>
      })
    }
    <div className='cart-footer-container'>
      <div className="cart-total-container">
        <h3>Total</h3>
        <h3>$ {cartTotal}</h3>
      </div>
      <div className='cart-checkout-container'>
        <button onClick={() => dispatch(setClearCart())}>
          Clear Cart
        </button>
        <button>
          Check Out
        </button>
      </div>
    </div>
  </section>
}

export default Cart;