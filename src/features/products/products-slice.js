import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    initialProducts: [],

    categoryFilterMode: {isMenChecked: false,
        isWomenChecked: false,
        isJewelryChecked: false,
        isTechChecked: false},

    ratingFilterMode: [false, false, false, false, false],

    allFilter: {rangeFilter: 1000, ratingFilter: 0, categoryFilter: ''},

    noProductsFoundModalData: [false,'No Products With The Specified Filters Found!'],

    isLoading: true,
}

const productsSlice = createSlice( {

    name: 'products',
    initialState,
    reducers: {
        addProductsFunc: (state, action) => {
            const data = action.payload; // stores data received from backend

            state.initialProducts = data; //Sets initialProducts to the retrived data from action payload
            state.isLoading = false; 
        },
        rangeValueFilterFunc: (state, action) => {
            const data = action.payload; // stores data received from range input

            state.allFilter.rangeFilter = data; // sets the range value to data
        },
        categoryFilterFunc: (state, action) => {

            const {name, value} = action.payload; //Destructuring received data from payload

            //Setting categoryFilterModes to false for clean up
            state.categoryFilterMode['isMenChecked'] = false;
            state.categoryFilterMode['isWomenChecked'] = false;
            state.categoryFilterMode['isJewelryChecked'] = false;
            state.categoryFilterMode['isTechChecked'] = false;

            state.categoryFilterMode[name] = !state.categoryFilterMode[name]; // sets matching mode to true/false
            state.allFilter.categoryFilter = value; // sets the matching mode to category filter to be used by filter
        },
        darkIcon: (state, action) => {

            const data = action.payload; //storing received from payload to data

                //Setting ratingFilterModes to false for clean up 
                state.ratingFilterMode[0] = false;
                state.ratingFilterMode[1] = false;
                state.ratingFilterMode[2] = false;
                state.ratingFilterMode[3] = false;
                state.ratingFilterMode[4] = false;

                if (data === 0) {
                    state.ratingFilterMode[data] = true;

                    state.allFilter.ratingFilter = 1; //setting the rating filter value to be used when by filter
                } else if(data === 1) {
                    
                    state.ratingFilterMode[0] = true;
                    state.ratingFilterMode[data] = true;

                    state.allFilter.ratingFilter = 2; //setting the rating filter value to be used when by filter
                } else if (data === 2) {

                    state.ratingFilterMode[0] = true;
                    state.ratingFilterMode[1] = true;
                    state.ratingFilterMode[data] = true;

                    state.allFilter.ratingFilter = 3; //setting the rating filter value to be used when by filter
                } else if (data === 3) {

                    state.ratingFilterMode[0] = true;
                    state.ratingFilterMode[1] = true;
                    state.ratingFilterMode[2] = true;
                    state.ratingFilterMode[data] = true;

                    state.allFilter.ratingFilter = 4; //setting the rating filter value to be used when by filter
                } else if (data === 4) {

                    state.ratingFilterMode[0] = true;
                    state.ratingFilterMode[1] = true;
                    state.ratingFilterMode[2] = true;
                    state.ratingFilterMode[3] = true;
                    state.ratingFilterMode[data] = true;

                    state.allFilter.ratingFilter = 5; //setting the rating filter value to be used when by filter
                }
        },
        setAllFilter: (state, action) => {

            const data = action.payload; //storing received from payload to data

            state.initialProducts = data; //sets initialProducts to data for clean up

            
            if (state.allFilter.categoryFilter) { // Checking if the category filter is selected

                state.initialProducts = state.initialProducts
                    .filter((item) => item.category === state.allFilter.categoryFilter)
                    .filter((item) => item.price <= state.allFilter.rangeFilter)
                    .filter((item) => item.rating.rate >= state.allFilter.ratingFilter)

            } else { //This checks if the other filters are selected

                state.initialProducts = state.initialProducts
                    .filter((item) => item.price <= state.allFilter.rangeFilter)
                    .filter((item) => item.rating.rate >= state.allFilter.ratingFilter)
            }
            if(state.initialProducts.length === 0) {
                state.noProductsFoundModalData[0] = true;
                state.isLoading = false;
            } else {
                state.noProductsFoundModalData[0] = false;
            }
        },
        setAllFilterOff: (state, action) => {
            const data = action.payload;

            state.initialProducts = data;
            state.categoryFilterMode['isMenChecked'] = false;
            state.categoryFilterMode['isWomenChecked'] = false;
            state.categoryFilterMode['isJewelryChecked'] = false;
            state.categoryFilterMode['isTechChecked'] = false;

            state.ratingFilterMode[0] = false;
            state.ratingFilterMode[1] = false;
            state.ratingFilterMode[2] = false;
            state.ratingFilterMode[3] = false;
            state.ratingFilterMode[4] = false;
            
            state.allFilter.rangeFilter = 1000;
            state.allFilter.ratingFilter = 0;
            state.allFilter.categoryFilter = '';
        },
        setIsLoadingFunc: (state) => {
            state.isLoading = true;
        }
    } 
})

export const {addProductsFunc, rangeValueFilterFunc, rangeFilterFunc, categoryFilterFunc, setIsLoadingFunc, setAllFilter, setAllFilterOff, darkIcon} = productsSlice.actions;
export default productsSlice.reducer;