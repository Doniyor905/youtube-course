import { configureStore } from '@reduxjs/toolkit'
import like from '../redux/favorite'
import cart from "./Cart"

const store = configureStore({
  reducer: {
    like,
    cart
  }
})

export default store