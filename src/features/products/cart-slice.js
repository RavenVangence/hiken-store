import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    isCartOpen: false,
    cartTotal: 0,
    totalCartItems: 0,
}



const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const [data] = action.payload;
            const {id} = data;

            if (state.cartItems.length === 0) {
                state.cartItems = [data];

                
            } else {
                if (id) {
                    const foundItem = state.cartItems.find((item) => item.id === id);
                    if(foundItem) {
                        foundItem.amount += 1;
                    } else {
                        state.cartItems.push(data);
                    }

                }
            }
            
            state.totalCartItems = state.totalCartItems + 1;
        },
        removeItem: (state, action) => {
            const {id, amount} = action.payload;

            state.cartItems = state.cartItems.filter((item) => item.id !== id);
            state.totalCartItems = state.totalCartItems - amount;
        },
        increaseAmount: (state, action) => {
            const id = action.payload
            const foundItem = state.cartItems.find((item) => item.id === id);
            foundItem.amount += 1;
            
            //Increase number of items in cart
            state.totalCartItems = state.totalCartItems + 1;
        },
        decreaseAmount: (state, action) => {
            const id = action.payload
            const foundItem = state.cartItems.find((item) => item.id === id);
            if (foundItem.amount === 1) {
                return;
            } else {
                foundItem.amount -= 1;

                //decrease number of items in cart
                state.totalCartItems = state.totalCartItems - 1;
            }
            
        },
        setIsCartOpenTrue: (state) => {
            state.isCartOpen = true;
            
        },
        setIsCartOpenFalse: (state) => {
            state.isCartOpen = false;
        },
        setCartTotal: (state) => {
            //Mathematics
            let total = 0;

            state.cartItems.forEach((item) => {
                total += item.price * item.amount;
            })

            state.cartTotal = total.toFixed(2);
        },
        setClearCart: (state) => {
            state.cartItems = [];
        }
    }
})


export const {addToCart, removeItem, setIsCartOpenTrue, setIsCartOpenFalse,decreaseAmount, increaseAmount, setCartTotal, setClearCart} = cartSlice.actions;
export default cartSlice.reducer;