import React, {Component} from 'react';
import styles from "./App.scss";
import DATA from './apps';
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";

import {createStore} from "redux";

function appList(state = DATA, action) {
    console.log(state, action);
    return state;
}

const store = createStore(appList);

store.subscribe(()=> {
   console.log('subscribe', store.getState())
});

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: DATA,
            games: false,
            tinkoff: true,
            filter: 'all',
            currentData: null
        }
    }

    componentDidMount() {
        const {data, games, tinkoff, currentData} = this.state;

        if (games) {
            this.setState({
                currentData: data.games
            })
        } else if (tinkoff) {
            this.setState({
                currentData: data.tinkoff
            })
        }
    }



    render() {
        const {data, games, tinkoff, filter, currentData} = this.state;
        let cardsArr;
        if (currentData !== null) {
            let id = 0;
            for (let item of currentData.applications) {
                item.key = id;
                id += 1;
            }
            console.log(currentData.applications);
            cardsArr = currentData.applications.map((item)=> {
                return <Card
                    key={item.key}
                    appAvatar={item.icon}
                    appName={item.name}
                    appPlatform={item.platform}
                    price={item.price}
                    rating={item.rating}
                    location={item.location}
                    aso={'ASO index'}
                    asoStats={item.asoindex}
                    installs={'Установок в месяц'}
                    installsStats={item.installations}
                    category={'В категории'}
                    categoryStats={item.categoryPosition}
                />
            });
        }
        return (
            <div className={styles.App}>
                <Filter

                />
                {cardsArr}
            </div>
        );
    }
}
