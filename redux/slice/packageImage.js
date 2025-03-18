import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '/mainDisp.jpg',
}

export const packageImage = createSlice({
  name: 'image',
  initialState,
  reducers: {
    changeImage: (state, action) => {
        state.value = action.payload
    }
  },
})

export const { changeImage } = packageImage.actions

export default packageImage.reducer