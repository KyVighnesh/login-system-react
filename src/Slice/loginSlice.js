import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: [],

  data:[]


}

export const loginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    fetchUserData:(state,action)=> {

        state.userData.push(action.payload)
    },


    updateForm:(state,action)=> {
  
      state.data.push(action.payload)

    }
   
  },
})

export const {fetchUserData, updateForm } = loginSlice.actions

export default loginSlice.reducer