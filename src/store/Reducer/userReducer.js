import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userDetails: {},
}

export const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        loginUser: (state, actions) => {
            state.userDetails = actions.payload
        },
        LogoutUser: (state) => {
            state.userDetails = {}
        },
    },
})


export const { loginUser, LogoutUser } = userReducer.actions

export default userReducer.reducer