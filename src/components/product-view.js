import React from 'react'
import axios from 'axios';
//ICONS
import { ImCross } from "react-icons/im";
//REDUX
import {useDispatch, useSelector} from 'react-redux';
import { isNotViewingFunc, setAddedItemModalTrue, setAddedItemModalFalse } from '../features/products/product-view-slice';
import {addToCart} from '../features/products/cart-slice'

// FRAMER MOTION
import { AnimatePresence, motion} from 'framer-motion';
import {productViewVariants, itemVariants, productViewModalVariants} from '../features/variants/product-view-variants';

function ProductView() {
    const dispatch = useDispatch();
    const {viewedProduct, isAddedToCartModal} = useSelector((store) => store.productView);
    
  return (
        <motion.section 
            className='product-view-container'
            key='remove'
            variants={productViewVariants}
            initial='before'
            animate='after'
            exit='exit'
            transition='transition'
        >
            {viewedProduct.map((product) => {
                    const {id ,title, price, image ,description, rating, category} = product;
                    const {rate, count} = rating;
                    let categoryChecker;
                    if (category === 'men\'s clothing' || category === 'women\'s clothing') {
                        categoryChecker = true;
                    } else {
                        categoryChecker = false;
                    }
                    return <>
                        <motion.div  
                            className='product-view-container-child'
                            key={id}
                            variants={itemVariants}
                            initial='before'
                            animate='after'
                            exit='exit'
                            transition='transition'
                        >
                            <div className='product-view-title'>
                                <h2>{title}</h2>
                                <button className='cross-icon-btn' onClick={() => {
                                    dispatch(isNotViewingFunc())
                                    dispatch(setAddedItemModalFalse())}}>
                                    <ImCross id='cross-icon' />
                                </button>
                                
                            </div>
                            
                            <div className='product-view-img-and-info-container'>
                                <img src={image} alt={image} id='product-view-img'/>
                                <div className='product-view-info-right-container'>
                                    <h3>Price</h3>
                                    <p>${price}</p> 
                                    <h3>Rating</h3>
                                    <p>{rate} / 5 from {count} ratings</p>
                                    
                                    { categoryChecker &&
                                        <div className='product-view-size-container'>
                                            <h3>Size</h3>
                                            <select name="product-size" id="product-size" defaultValue='M'>
                                                <option value="XXL">XXL</option>
                                                <option value="XL">XL</option>
                                                <option value="L">L</option>
                                                <option value="M">M</option>
                                                <option value="S">s</option>
                                                <option value="XS">xs</option>
                                                <option value="XXS">xxs</option>
                                            </select>
                                        </div>
                                    }
                                    <motion.button 
                                        className='add-item-to-cart-btn'
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 1}} 
                                        onClick={ () => { 
                                            dispatch(setAddedItemModalTrue())
                                            const fetchData = async () => {
                                                try {
                                                    const response = await axios({
                                                    method: 'get', 
                                                    url: `http://localhost:8000/cart/item/${id}`
                                                })
                                                const data = [response.data];
                                                dispatch(addToCart(data));
                                                
                                                } catch (error) {
                                                    console.log(error);
                                                }
                                            }
                                            fetchData();
                                            setTimeout(() => {
                                                dispatch(setAddedItemModalFalse())
                                            }, 4000)
                                    }}>
                                        Add Item To Cart
                                    </motion.button>
                                </div>
                            </div>


                            <div className='product-view-description'>
                                <h3>Description</h3>
                                <p>{description}</p>
                            </div>
                            <AnimatePresence>
                            {isAddedToCartModal && <motion.div  
                                                        className="added-item-modal"
                                                        key='product-modal'
                                                        variants={productViewModalVariants}
                                                        initial='before'
                                                        animate='after'
                                                        exit='exit'
                                                        transition='transition'
                                                    >
                                <p>Item Added To Cart</p>
                            </motion.div>}
                            </AnimatePresence>
                        </motion.div>
                    </>
                })
            }
        </motion.section>
    
  )
}

export default  ProductView;