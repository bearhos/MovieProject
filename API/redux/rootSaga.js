import {all} from 'redux-saga/effects'
import { moviesSagas } from './movieSaga';


export default function* rootSaga() {
    yield all([...moviesSagas]);
}