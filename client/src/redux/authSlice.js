import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null,
}

//redux has a centralized store, which is a single source of truth
//this store is composed of slices, which are pieces of state

export const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {
        login(state, action) {
            state.user = action.payload.others
            state.token = action.payload.token
        },
        register(state, action){
            state.user = action.payload.others
            state.token = action.payload.token
        },
        logout(state){
            state.user = null
            state.token = null
        }
    }
})