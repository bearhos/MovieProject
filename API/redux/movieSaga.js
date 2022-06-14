import axios from 'axios'
import {call ,put, takeEvery,fork} from  'redux-saga/effects'

import axiosClient from '../axiosClient'
import movieAPI, { list_id, movieType } from '../movieApi'
import { getMovies, getMovieSearch, getWishList, setMovies, setMovieSearch, setWishList,getStatusWishList, setStatusWishList, getAddWishList, setAddWishList } from './movieSlice'

function* workGetMoviesFetch({payload}) {
   
    try{
        params = {page:1}
        cate = payload[0]
        type = payload[1]
        const response = yield call(movieAPI.getMoviesList,cate,type,{params})
        yield put(setMovies(response.results))
        
        
    }
    catch (err){
        console.log(err)
    }
}
function* workGetSearchMoviesFetch({payload}) {
   
    try{
        params = payload[1]
        cate = payload[0]
        const response = yield call(movieAPI.search,cate,{params})
        yield put(setMovieSearch(response.results))
          
        
    }
    catch (err){
        console.log(err)
    }
}
function* workGetWishListFetch({payload}) {
   
    try{
        id = '8206765'
        params = payload
        const response = yield call(movieAPI.getLoveList,id,{params})
        yield put(setWishList(response.items))
        
        
        
    }
    catch (err){
        console.log(err)
    }
}
function* workGetStatusWishListFetch({payload}) {
   
    try{
        id = '8206765'
      
        params = payload
        const response = yield call(movieAPI.getStatusList,id,{params})
        yield put(setStatusWishList(response.item_present))
        
        
        
    }
    catch (err){
        console.log(err)
    }
}
function* workAddWishListFetch({payload}) {
   
    try{
        id = '8206765'
        session = '112cf99b660c15fd3a605b98ba68bf30bde46ca4'
        params = payload
        const response = yield call(movieAPI.addList,id,session,params)
        yield put(setAddWishList(response))
        
        
        
    }
    catch (err){
        console.log(err)
    }
}


function* movieSaga() {
   
    yield takeEvery(getMovies.type, workGetMoviesFetch )
    yield takeEvery(getMovieSearch.type, workGetSearchMoviesFetch )
    yield takeEvery(getWishList.type, workGetWishListFetch )
    yield takeEvery(getStatusWishList.type, workGetStatusWishListFetch )
    yield takeEvery(getAddWishList.type, workAddWishListFetch )
}
export const moviesSagas = [fork(movieSaga)]