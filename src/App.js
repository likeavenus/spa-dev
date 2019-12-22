import React, {Component} from 'react';
import styles from "./App.scss";
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import {connect} from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {

        let cardsArr;
        let id = 0;
        for (let item of this.props.store.applications) {
            item.key = id;
            id += 1;
        }
        cardsArr = this.props.store.applications.map((item)=> {
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
