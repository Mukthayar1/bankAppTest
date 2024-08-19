import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    banners: [],
    categories: [],
    brand: [],
    latestProducts:[]
}

export const homeReducer = createSlice({
    name: 'homeReducer',
    initialState,
    reducers: {
        SetBanners: (state, actions) => {
            state.banners = actions.payload
        },
        SetCategories: (state, actions) => {
            state.categories = actions.payload
        },
        SetLatestProducts: (state, actions) => {
            state.latestProducts = actions.payload
        },
        SetBrand: (state, actions) => {
            state.brand = actions.payload
        },
    },
})


export const { SetBanners, SetCategories, SetBrand, SetLatestProducts } = homeReducer.actions

export default homeReducer.reducer