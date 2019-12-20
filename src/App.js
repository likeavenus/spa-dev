import React, {Component} from 'react';
import styles from "./App.scss";
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import {SHOW_ALL} from "./actions/actions";
import {connect} from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        // const {data, games, tinkoff, filter, currentData} = this.state;
        // let cardsArr;
        // if (currentData !== null) {
        //     let id = 0;
        //     for (let item of currentData.applications) {
        //         item.key = id;
        //         id += 1;
        //     }
        //     cardsArr = currentData.applications.map((item)=> {
        //         return <Card
        //             key={item.key}
        //             appAvatar={item.icon}
        //             appName={item.name}
        //             appPlatform={item.platform}
        //             price={item.price}
        //             rating={item.rating}
        //             location={item.location}
        //             aso={'ASO index'}
        //             asoStats={item.asoindex}
        //             installs={'Установок в месяц'}
        //             installsStats={item.installations}
        //             category={'В категории'}
        //             categoryStats={item.categoryPosition}
        //         />
        //     });
        // }

        console.log(this.props.store)
        const {tinkoff} = this.props.store[0];

        let cardsArr;
        let id = 0;
        for (let item of tinkoff.applications) {
            item.key = id;
            id += 1;
        }
        cardsArr = tinkoff.applications.map((item)=> {
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
                <Filter

                />
                {cardsArr}
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({})
)(App);
