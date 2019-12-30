import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './apps';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import {
    CHANGE_TAB,
    CHANGE_PLATFORM,
    ALL_PLATFORMS,
    } from './actions/actions';

const initialState = {
    list: data,
    filter: 'TINKOFF',
    platform: ALL_PLATFORMS
};

function appList(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TAB:
            return {...state, filter: action.filter};
        case CHANGE_PLATFORM:
            return visibilityFilter(state, action);
        default: return state;
    }
}

function visibilityFilter(state = ALL_PLATFORMS, action) {
    return {...state, platform: action.platform};
}

const store = createStore(appList, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

store.subscribe(()=> {
    console.log('getState', store.getState());
});


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
