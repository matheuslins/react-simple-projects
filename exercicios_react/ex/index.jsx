import React from 'react'
import ReactDOM from 'react-dom'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import couterReducer from './couterReducer'
import Counter from './counter'


const reducers = combineReducers({
    couter: couterReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>
    ,document.getElementById('app')
)