import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        productId: '',
        isProduct: false,
        isDelete: false,
        isEdit: false,
        isAdd: false,
        products: [],
        product: {},
    },
    reducers: {
        setProducts: (state, action) =>{
            state.products = action.payload
        },
        toggleProduct: (state, action) => {
            state.isProduct = !state.isProduct;
            state.product = action.payload;},

        toggleDelete: (state, action) => {
            state.isDelete = !state.isDelete;
            state.productId = action.payload;
        },
        toggleAdd:(state, action) => { 
            state.isAdd = !state.isAdd;
            state.productId = state.products.length + 1;   
},
        toggleEdit: (state, action) => {
            state.productId = action.payload;
            let prodArray = state.products.filter((product)=>{return product.id===action.payload})
            if (prodArray.length === 1) {state.product = (prodArray[0])}
            state.isEdit = !state.isEdit;
        },
    }
});

export const {toggleProduct, toggleDelete, toggleAdd, toggleEdit, setProducts} = toggleSlice.actions;

export default toggleSlice.reducer;

