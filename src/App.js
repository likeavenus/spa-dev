import React, {Component} from 'react';
import styles from "./App.scss";
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import {connect} from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: '',
            array: []
        }
    }

    componentDidMount() {
    }

    render() {
        let cardsArr;
        if (this.props.store.filter === 'GAMES') {
            let gamesId = 0;
            for (let item of this.props.store.list.games.applications) {
                item.key = gamesId;
                gamesId += 1;
            }
            cardsArr = this.props.store.list.games.applications.map((item)=> {
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
        } else {
            let tinkoffId = 0;
            for (let item of this.props.store.list.tinkoff.applications) {
                item.key = tinkoffId;
                tinkoffId += 1;
            }
            cardsArr = this.props.store.list.tinkoff.applications.map((item)=> {
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
