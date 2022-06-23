import axios from 'axios'
import {call ,put, takeEvery,fork} from  'redux-saga/effects'

import axiosClient from '../axiosClient'
import movieAPI, { list_id, movieType } from '../movieApi'
import { getMovies, getMovieSearch, getWishList, setMovies, setMovieSearch, setWishList,getStatusWishList, setStatusWishList, getAddWishList, setAddWishList, getDetail, setDetail, getRemoveWishList, setRemoveWishList, getVideo, setVideo } from './movieSlice'

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
function* workGetDetailFetch({payload}) {
   
    try{
    
        cate = payload[0]
        id = payload[1]
        const response = yield call(movieAPI.getDetail,cate,id)
        yield put(setDetail(response))
        
        
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
        const response = yield call(movieAPI.getLoveList,id,params)
        yield put(setWishList(response.items))
        
        
        
    }
    catch (err){
        console.log(err)
    }
}
function* workGetStatusWishListFetch({payload}) {
   
    try{
        id = '8206765'
        id_media = payload
        const response = yield call(movieAPI.getStatusList,id,id_media)
        yield put(setStatusWishList(response.item_present))
        
        
        
    }
    catch (err){
        console.log(err)
    }
}
function* workAddWishListFetch({payload}) {
   
    try{
        id = '8206765'
        data = payload
        const response = yield call(movieAPI.addList,id,data)
        yield put(setAddWishList(response))
        
        
        
    }
    catch (err){
        console.log(err)
    }
}
function* workRemoveWishListFetch({payload}) {
   
    try{
        id = '8206765'
        data = payload
        const response = yield call(movieAPI.removeList,id,data)
        yield put(setRemoveWishList(response))
        
        
        
    }
    catch (err){
        console.log(err)
    }
}
function* workGetVideoFetch({payload}) {
   
    try{
        id = payload[1]
        cate = payload[0]
        const response = yield call(movieAPI.getVideos,cate,id)
        yield put(setVideo(response.results[0]))
        
        
        
    }
    catch (err){
        console.log(err)
    }
}



function* movieSaga() {
   
    yield takeEvery(getMovies.type, workGetMoviesFetch )
    yield takeEvery(getDetail.type, workGetDetailFetch )
    yield takeEvery(getMovieSearch.type, workGetSearchMoviesFetch )
    yield takeEvery(getWishList.type, workGetWishListFetch )
    yield takeEvery(getStatusWishList.type, workGetStatusWishListFetch )
    yield takeEvery(getAddWishList.type, workAddWishListFetch )
    yield takeEvery(getRemoveWishList.type, workRemoveWishListFetch )
    yield takeEvery(getVideo.type, workGetVideoFetch )
}
export const moviesSagas = [fork(movieSaga)]