
import {createSlice} from '@reduxjs/toolkit';


const authSlice =  createSlice({
    name:"auth login",
    initialState:{
        loading:false,
        authenticated:localStorage.getItem("token") || null
    },
    reducers:{
        handleAuthLogin:(state, action)=>{
            state.authenticated =  localStorage.setItem("token", action.payload)

        },

        handleLogOut:(state, action)=>{
            localStorage.clear();
            state.authenticated =  action.payload
        }
    }
})

export const {handleLogOut, handleAuthLogin} =  authSlice.actions
export default authSlice.reducer