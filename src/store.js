// Imports
import { compose, combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// App Imports
import * as consumersData from './reducers/consumers/ConsumersReducer';

// App Reducer - currently there is 1 reducer, if application grows complex then we can have multiple reducers and later
// combine all using below method
const appReducer = combineReducers({
    ...consumersData
})

// Root Reducer
export const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined
    }
    return appReducer(state, action)
}

// Load initial state from server side
let initialState
if(typeof window !== 'undefined') {
    initialState = window.__INITIAL_STATE__
    delete window.__INITIAL_STATE__
}

// Store
export const store = createStore(
    rootReducer,
    initialState,

    compose(
        applyMiddleware(thunk),
    )
)
