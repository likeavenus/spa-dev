import styles from "./CardBottomInfo.scss";
import React, {Component} from "react";

export default class CardBottomInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    id: 1,
                    title: 'ASO index',
                    info: '7,8',
                    place: '3'
                },
                {
                    id: 2,
                    title: 'Установок за месяц',
                    info: '135K.',
                    place: '3'
                },
                {
                    id: 3,
                    title: 'В категории',
                    info: '3',
                    place: '3'
                },
            ]
        }
    }
    render() {

        const {data} = this.state;
        const dataArr = data.map((item)=> {
            return <div key={item.id} className={styles.block_item}>
                <div className={styles.block_item_title}>{item.title}</div>
                <div className={styles.block_item_value}>{item.info}</div>
            </div>
        });
        return (
            <div className={styles.block}>
                {dataArr}
            </div>
        );
    }
}
