import React, { useEffect } from 'react'
// import axios from 'axios';
//REDUX
import {useDispatch, useSelector} from 'react-redux'

//ICONS
import {TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/ti'
import { ImCross } from "react-icons/im";

// REDUX
import { setIsCartOpenFalse, increaseAmount, decreaseAmount, setCartTotal, removeItem, setClearCart } from '../features/products/cart-slice';

// FRAMER MOTION
import { AnimatePresence, motion } from 'framer-motion';
import {cartVariants, cartItemVariants} from '../features/variants/cart-variants.js'

function Cart() {
    const dispatch = useDispatch();
    const {cartItems, cartTotal} = useSelector((store) => store.cartSlice)

    useEffect(() => {
      dispatch(setCartTotal())
    }, [cartItems])

  return <>
          <motion.section 
            className='cart-container'
            key='cart-reel'
            variants={cartVariants}
            initial='before'
            animate='after'
            exit='exit'
            transition='transition'
          >
      <div>
        <div className='cart-heading-container'>
          <AnimatePresence>
            {cartItems.length === 0 ?  <motion.h2 
                                          key='heading-1'
                                          initial={{y: '4rem'}}
                                          animate={{y: 0}}
                                          exit={{y: '100vh', scale: 0, opacity: 0}}
                                          >Your Shopping Cart Is Empty</motion.h2> : 
                                          <motion.h1
                                            key='heading-2'
                                            initial={{y: '-8rem'}}
                                            animate={{y: 0}}
                                            exit={{y: '-8rem'}}
                                          >Shopping Cart</motion.h1>}</AnimatePresence>
          
          
          <button className='cart-cross-icon-btn' onClick={() => dispatch(setIsCartOpenFalse())}>
          <ImCross className='cart-cross-icon'/>
          </button>
        </div>
        {
          cartItems.map((item) => {
            const {id, title, price, amount, image} = item;

            return <AnimatePresence mode='wait'>
            <motion.div   
              className='cart-item-container' 
              key={id}
              variants={cartItemVariants}
              initial='before'
              animate='after'
              exit='exit'
              transition='transition'
            >
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
            </motion.div>
            </AnimatePresence> 
          })
        }
      </div>
  </motion.section>

  <motion.div className='cart-footer-container' 
  key='cart-man'
            variants={cartVariants}
            initial='before'
            animate='after'
            exit='exit'
            transition='transition'>
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
        </motion.div>
  </>
}

export default Cart;