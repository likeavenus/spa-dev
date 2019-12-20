import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DATA from './apps';
import * as serviceWorker from './serviceWorker';
import {Provider, connect} from 'react-redux';
import {createStore} from "redux";

function appList(state = [DATA], action) {
    if (action.type === "SHOW_ALL") {
        return [
            ...state,
            action.payload
        ]
    }

    return state;
}

const store = createStore(appList);

store.subscribe(()=> {
    console.log('subscribe', store.getState());
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
