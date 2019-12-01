import styles from "./CardBottomInfo.scss";
import React, {Component} from "react";

export default class CardBottomInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className={styles.block}>
                <div className={styles.block_item}>
                    <div className={styles.block_item_title}>{this.props.aso}</div>
                    <div className={styles.block_item_value}>{this.props.asoStats}</div>
                </div>
                <div className={styles.block_item}>
                    <div className={styles.block_item_title}>{this.props.installs}</div>
                    <div className={styles.block_item_value}>{this.props.installsStats}</div>
                </div>
                <div className={styles.block_item}>
                    <div className={styles.block_item_title}>{this.props.category}</div>
                    <div className={styles.block_item_value}>{this.props.categoryStats}</div>
                </div>
            </div>
        );
    }
}
