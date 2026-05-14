import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movieList: [],
  isLoading: false,
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movieList = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const { setMovies, setIsLoading } = movieSlice.actions
export default movieSlice.reducer