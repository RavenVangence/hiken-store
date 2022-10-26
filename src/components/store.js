import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/products-slice';
import productViewSliceReducer from '../features/products/product-view-slice';
import cartSliceReducer from '../features/products/cart-slice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        productView: productViewSliceReducer,
        cartSlice: cartSliceReducer 
    }
})