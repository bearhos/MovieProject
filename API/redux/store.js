import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import MovieReducer from './movieSlice'
import movieSaga from './movieSaga'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './rootSaga'

const saga = createSagaMiddleware()
const store = configureStore({
    reducer : {
        movies: MovieReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
})
saga.run(rootSaga)      
export default store