import { configureStore } from '@reduxjs/toolkit'
import like from '../redux/favoriteSlice'

const store = configureStore({
  reducer: {
    like,
  }
})

export default store