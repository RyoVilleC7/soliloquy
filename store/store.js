import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer } from './reducer'
import { logger } from 'redux-logger'

export const Store = createStore(reducer, applyMiddleware(logger));