import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './movieSlice'

// Import các slide ở đây
export const store = configureStore({
  reducer: {
    // Key 'movie' này sẽ là tên vùng dữ liệu trong Store của bạn
    movie: movieReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
