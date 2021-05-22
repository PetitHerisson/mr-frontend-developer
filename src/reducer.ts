import { combineReducers, createReducer } from '@reduxjs/toolkit'
import { createAction } from "@reduxjs/toolkit";
import { ProductType } from './type';

const initialState: ProductType[] = [
    {
        name: 'Classic Tee',
        price: 75,
        size: 'S',
        quantity: 1,
        image: 'classic-tee.jpg'
    },
    {
        name: 'Classic Tee',
        price: 75,
        size: 'L',
        quantity: 3,
        image: 'classic-tee.jpg'
    }
]
export const ADD_TO_CART = createAction<string>('addToCart')
const reducer = createReducer(initialState, {
    [ADD_TO_CART.type]: (state, action) => {
        const { payload } = action
        const item = state.find(i => i.size === payload);
        if (!item) {
            state.push({
                name: 'Classic Tee',
                price: 75,
                size: payload,
                quantity: 1,
                image: 'classic-tee.jpg'
            })
        }
        else{
            state.forEach(i => {
                if(i.size === payload){
                    i.quantity += 1
                }
            })
        }
    }
})
export const rootReducer = combineReducers({
    reducer: reducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default reducer