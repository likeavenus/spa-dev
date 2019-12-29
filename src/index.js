import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './apps';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import {CHANGE_TAB} from './actions/actions';

const initialState = {
    list: data,
    filter: 'TINKOFF'
};

function appList(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TAB:
            return {...state, filter: action.filter}
        default: return state;
    }
}

// function visibilityFilter(state = TINKOFF, action) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return action.filter;
//         default: return state;
//     }
// }
//
// function appList(state = initialState, action) {
//     switch (action.type) {
//         case CHANGE_TAB:
//             return visibilityFilter(state, action.filter);
//         default: return state;
//     }
// }

const store = createStore(appList, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(()=> {
    console.log('getState', store.getState());
});


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
