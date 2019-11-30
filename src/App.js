import React, {Component} from 'react';
import styles from "./App.scss";
import DATA from './apps';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        console.log(DATA);
    }


    render() {
        return (
            <div className={styles.App}>
                asdasd
            </div>
        );
    }
}
