import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProduct {
    id: string;
    tittle: string;
    img: string;
    price: number;
    quantity: number;
}
const initialState: Array<IProduct> = [];

export const cartSlice= createSlice({
    name : "cartSlice",
    initialState, 
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            if(state.findIndex((pro) => pro.id === action.payLoad.id) === -1){
                state.push(action.payLoad)
            } else {
                return state.map((item)=> {
                    return item.id === action.payLoad.id ? 
                    {...item, quantity: item.quantity + 1} 
                    : item;
                });   
            }   
        },

        removeFromCart: (state, action: PayloadAction<string>) => { 
            const id = action.payLoad
            return state.filter((item) => item.id !== id)   
        }
    },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;