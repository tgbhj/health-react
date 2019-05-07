import React from 'react'
import {render} from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Routers from './router/index'
import todoApp from './reducers/index'
import * as serviceWorker from './serviceWorker'

let store = createStore(todoApp, applyMiddleware(thunkMiddleware)); // 允许我们dispatch()函数

render(
    <Provider store={store}>
        <Routers/>
    </Provider>,
    document.getElementById('root')
);

// serviceWorker.unregister();
serviceWorker.register();

// console.log(store.getState());