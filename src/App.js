 import React, {Component} from 'react';
import styles from "./App.scss";
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import {connect} from 'react-redux';

import {ALL_PLATFORMS} from "./actions/actions";
import {IOS_PLATFORM} from "./actions/actions";
import {ANDROID_PLATFORM} from "./actions/actions";

 class App extends Component {

     render() {

        let currentFilter = this.props.store.filter.toLowerCase();
        let cardsArr;
        let id = 0;
        for (let item of this.props.store.list[currentFilter].applications) {
            item.key = id;
            id += 1;
        }

        switch (this.props.store.platform) {
            case ALL_PLATFORMS:

        }
        cardsArr = this.props.store.list[currentFilter].applications.map((item)=> {
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

        return (
            <div className={styles.App}>
                <Filter/>
                {cardsArr}
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state
    })
)(App);
