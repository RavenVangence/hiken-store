import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    isCartOpen: false,
    allItemTotal: 0,
    individualItemSum: [0, ''],
    // individualTotalNumber: 0
}



const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const data = action.payload;

            state.cartItems = data; 
        },
        setIsCartOpenTrue: (state) => {
            state.isCartOpen = true;
        }
    }
})


export const {addToCart, setIsCartOpenTrue} = cartSlice.actions;
export default cartSlice.reducer;