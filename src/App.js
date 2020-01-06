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

        const {activeTab, list, filter} = this.props.store;

        let currentFilter = activeTab.toLowerCase();
        let cardsArr;
        let id = 0;
        for (let item of list[currentFilter].applications) {
            item.key = id;
            id += 1;
        }


         cardsArr = list[currentFilter].applications.map((item)=> {
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

        function filterCard() {

            switch (filter[activeTab].platform) {
                case ALL_PLATFORMS:
                    return cardsArr;
                case IOS_PLATFORM:
                    return list[currentFilter].applications.filter(item => item.platform === "apple" || item.platform === "iphone").map(item => {
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
                case ANDROID_PLATFORM:
                    return list[currentFilter].applications.filter(item => item.platform === "android").map(item => {
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

                default: return cardsArr;
            }
        }


         return (
            <div className={styles.App}>
                <Filter/>
                <div className={styles.cards_box}>
                    {filterCard()}
                </div>

            </div>
        );
    }
}

export default connect(
    state => ({
        store: state
    })
)(App);
