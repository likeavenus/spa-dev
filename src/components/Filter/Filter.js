import React, {Component} from 'react';
import styles from './Filter.scss';
import Apple from '../SvgItems/AppleSvg';
import Android from '../SvgItems/AndroidSvg';

export default class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            space: 'tinkoff'
        }
    }

    selectFunction = (space) => {
    };
    render() {

        return (
            <div className={styles.block}>
                <div className={styles.select_menu}>
                    <button type={'button'} onClick={()=> {this.selectFunction('games')}} className={styles.select_stage}>Игры</button>
                    <button type={'button'} onClick={()=> {this.selectFunction('tinkoff')}} className={styles.select_stage}>Тинькофф</button>
                </div>
                <div className={styles.block_box}>
                    <div className={styles.block_filters}>
                        <h3 className={styles.filters_title}>Фильтр</h3>

                        <div className={styles.filter_wrapper}>
                            <ul className={styles.filters_list}>
                                <li className={styles.filter_item}>
                                    <button className={styles.filter_button} type={'button'}>Все</button>
                                </li>
                                <li className={styles.filter_item}>
                                    <button className={styles.filter_button} type={'button'}>
                                        <Apple
                                            styles={styles.apple_img}
                                        />
                                    </button>
                                </li>
                                <li className={styles.filter_item}>
                                    <button className={styles.filter_button} type={'button'}>
                                        <Android
                                            styles={styles.android_img}
                                        />
                                    </button>
                                </li>
                            </ul>

                            <div className={styles.rating_box}>
                                <button className={styles.select_rating} type={'button'}>Выбрать</button>
                                <div className={styles.rating_list}>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
