import { configureStore } from '@reduxjs/toolkit'
import  packageTitle  from './slice/packageInfo'

export const store = configureStore({
  reducer: {
    title: packageTitle,
  },
})