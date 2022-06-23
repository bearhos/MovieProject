import {createSlice} from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    details: {},
    wishList: [],
    video: [],
    moviesList: [],
    searchList: [],
    statusList: false,
  },
  reducers: {
    getMovies(cate, type) {
      return cate, type;
    },
    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },
    getDetail(cate, id) {
      return cate, id;
    },
    setDetail: (state, action) => {
      state.details = action.payload;
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
      getRemoveWishList(id,data) {
        return id,data ;
      },
    setRemoveWishList: (state, action) => {
      state.wishList = state.wishList.filter((wishlist) => wishlist.id !== action.payload);
      },
      getVideo(id) {
        return id ;
      },
    setVideo: (state, action) => {
      state.video = action.payload;
      },
       
  },
});
export const {getMovies, getVideo, setVideo, setRemoveWishList, getRemoveWishList, setMovies,getDetail,setDetail, getMovieSearch, setMovieSearch,getWishList,setWishList,getStatusWishList,setStatusWishList,getAddWishList,setAddWishList} =
  movieSlice.actions;
export default movieSlice.reducer;
