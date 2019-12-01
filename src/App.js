import React, {Component} from 'react';
import styles from "./App.scss";
import DATA from './apps';
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            games: false,
            tinkoff: true,
            filter: 'all'
        }
    }

    componentDidMount() {
        this.setState({
            data: DATA
        }, ()=> {
            const {games, tinkoff, data} = this.state;
            if (games) {
                console.log(data.games)
            } else if (tinkoff) {
                console.log(data.tinkoff)
            }
        })


    }


    render() {
        const {data, games, tinkoff, filter} = this.state;

        console.log(data);
        return (
            <div className={styles.App}>
                <Filter/>
                <Card/>
            </div>
        );
    }
}
