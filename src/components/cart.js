import React from 'react'
// import axios from 'axios';
//REDUX
import {useDispatch, useSelector} from 'react-redux'

//ICONS
import {TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/ti'
import { ImCross } from "react-icons/im";

function Cart() {
    const dispatch = useDispatch();
    const {cartItems} = useSelector((store) => store.cartSlice)

  return <section className='cart-container'>
    <div className='cart-heading-container'>
      <h1>Your Cart Awaiteth</h1>
      <ImCross/>
    </div>
    {
      cartItems.map((item) => {
        const {id, title, price, amount, image} = item;

        return <div className='cart-item-container' key={id}>
          <img src={image} alt={title} id='cart-item-image'/>
          <div>
            <h3>{title}</h3>
            <h4>${price}</h4>
            <button>
              remove item
            </button>
          </div>
          <div className='cart-item-btn-container'>
            <button>
              <TiArrowSortedUp className='increase-decrease-icons'/>
            </button>
              {amount}
            <button>
              <TiArrowSortedDown className='increase-decrease-icons'/>
            </button>
          </div>
        </div>
      })
    }
  </section>
}

export default Cart;