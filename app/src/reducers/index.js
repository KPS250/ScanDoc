import { combineReducers, applyMiddleware } from 'redux';
import {busyErrorReducer} from '../reducers/BusyErrorReducer'
import {homeReducer} from '../reducers/HomeReducer'

export const AppReducers = combineReducers({
    busyErrorReducer,
    homeReducer
})

