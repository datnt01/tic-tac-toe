import { configureStore } from '@reduxjs/toolkit'
import boardReducer from './slice/BoardSlice'

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
})