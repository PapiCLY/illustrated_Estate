import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null,
}

//redux has a centralized store, which is a single source of truth
//this store is composed of slices, which are pieces of state