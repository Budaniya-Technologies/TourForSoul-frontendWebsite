import { configureStore } from '@reduxjs/toolkit'
import  packageTitle  from './slice/packageInfo'
import  packageImage  from './slice/packageImage'

export const store = configureStore({
  reducer: {
    title: packageTitle,
    image: packageImage
  },
})