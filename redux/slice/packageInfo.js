import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'Not Found',
}

export const packageTitle = createSlice({
  name: 'title',
  initialState,
  reducers: {
    changeTitle: (state, action) => {
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeTitle } = packageTitle.actions

export default packageTitle.reducer