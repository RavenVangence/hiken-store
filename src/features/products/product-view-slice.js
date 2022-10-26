import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    viewedProduct : [],
    isBeingViewed: false,
    isAddedToCartModal: false,
}

const productViewSlice = createSlice({
    name: 'productView',
    initialState,
    reducers: {
        addViewedProductFunc: (state, action) => {
            const data = action.payload;

            state.viewedProduct = data;
            state.isBeingViewed = true
        },
        isNotViewingFunc: (state) => {
            state.isBeingViewed = false;
        },
        setAddedItemModalTrue: (state) => {
            state.isAddedToCartModal = true;
        },
        setAddedItemModalFalse: (state) => {
            state.isAddedToCartModal = false;
        }

    }
})
export const {addViewedProductFunc, isNotViewingFunc, setAddedItemModalTrue, setAddedItemModalFalse} = productViewSlice.actions;
export default productViewSlice.reducer;