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
    activeTab: 'TINKOFF',
    filter: {
        'TINKOFF': {
            platform: ALL_PLATFORMS
        },
        'GAMES': {
            platform: ALL_PLATFORMS
        }
    },
};

initialState.list.tinkoff.applications.map(item => {
    if (item.name.length > 40) {
        item.name = item.name.slice(0, 40) + '...';
    }

    if (parseInt(item.installations) > 1000 && parseInt(item.installations) < 1000000) {
        item.installations = '1k';
    } else if (parseInt(item.installations) > 1000000) {
        item.installations = '1kk';
    }
});

initialState.list.games.applications.map(item => {
    if (item.name.length > 40) {
        item.name = item.name.slice(0, 40) + '...';
    }

    if (parseInt(item.installations) > 1000 && parseInt(item.installations) < 1000000) {
        item.installations = '1k';
    } else if (parseInt(item.installations) > 1000000) {
        item.installations = '1kk';
    }
});

function appList(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TAB:
            return {...state, activeTab: action.activeTab};
        case CHANGE_PLATFORM:
            return visibilityFilter(state, action);
        default: return state;
    }
}

function visibilityFilter(state = ALL_PLATFORMS, action) {
    return {...state, filter: {
            'TINKOFF': {
                platform: action['TINKOFF']
            },
            'GAMES': {
                platform: action['GAMES']
            },
        }
    };
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
