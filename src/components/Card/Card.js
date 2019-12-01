import React, {Component} from 'react';
import styles from './Card.scss';
import {apple} from "./AppleSvg";
import {star} from './StarSvg';
import {mark} from './MarkSvg';

import CardBottomInfo from "../CardBottomInfo/CardBottomInfo";

export default class Card extends Component {
    render() {
        return(
            <div className={styles.block}>
                <div className={styles.block_top}>
                    <div className={styles.block_avatar}>
                        <img src={'https://lh3.ggpht.com/3F5mBvgv0ux28x3-d6tYMIrdtvVBlwGKqEIKmXnPuXFaVYJGNc6B1aS3_sKyevY3eeLz=s360-rw'} alt=""/>
                    </div>
                    <div className={styles.block_top_info}>
                        <div className={styles.app_name}>Тинькофф – Онлайн банк. Банк № 1 в России</div>
                        <div className={styles.app_info}>

                            <div className={styles.app_platform_info}>
                                <div className={styles.app_platform}>
                                   {apple}
                                    <p className={styles.app_price}>free</p>
                                </div>
                            </div>

                            <div className={styles.app_rating}>
                                {star}
                                <p className={styles.app_rating_num}>4,8</p>
                            </div>

                            <div className={styles.app_language}>
                                {mark}
                                <p className={styles.app_lang_text}>RU</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CardBottomInfo/>
            </div>
        )
    }
}
