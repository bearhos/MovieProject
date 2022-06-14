import {createSlice} from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    wishList: [],
    moviesList: [],
    searchList: [],
    statusList: {},
  },
  reducers: {
    getMovies(cate, type) {
      return cate, type;
    },
    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },
    getMovieSearch(cate, type) {
      return cate, type;
    },
    setMovieSearch: (state, action) => {
      state.searchList = action.payload;
    },
    getWishList(id) {
        return id ;
      },
    setWishList: (state, action) => {
        state.wishList = action.payload;
      },
      getStatusWishList(id) {
        return id ;
      },
    setStatusWishList: (state, action) => {
        state.statusList = action.payload;
      },
      getAddWishList(id) {
        return id ;
      },
    setAddWishList: (state, action) => {
        state.wishList.push(action.payload)
      },
       
  },
});
export const {getMovies, setMovies, getMovieSearch, setMovieSearch,getWishList,setWishList,getStatusWishList,setStatusWishList,getAddWishList,setAddWishList} =
  movieSlice.actions;
export default movieSlice.reducer;
