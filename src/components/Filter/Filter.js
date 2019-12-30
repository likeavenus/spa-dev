import React, {Component} from 'react';
import styles from './Filter.scss';
import Apple from '../SvgItems/AppleSvg';
import Android from '../SvgItems/AndroidSvg';
import {connect} from 'react-redux';
import {
    CHANGE_TAB,
    CHANGE_PLATFORM,
    ALL_PLATFORMS,
    IOS_PLATFORM,
    ANDROID_PLATFORM
} from '../../actions/actions';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: ''
        }
    }

    componentDidMount() {
        this.setState({
            activeTab: this.props.store.filter
        })
    }

    selectFunction = (action, filter) => {
        this.props.onSelectFilter(action, filter);
        this.setState({
            activeTab: filter
        })
    };

    selectPlatform = (action, platform) => {
        console.log(action, platform);
        this.props.onSelectPlatform(action, platform);
    };


    render() {

        const {activeTab} = this.state;
        let tinkoffTab = styles.select_stage;
        let gamesTab = styles.select_stage;

        if(activeTab === 'TINKOFF') {
            tinkoffTab += ` ${styles.active}`;
            gamesTab = styles.select_stage;
        } else if(activeTab === 'GAMES'){
            tinkoffTab = styles.select_stage;
            gamesTab += ` ${styles.active}`;
        }

        return (
            <div className={styles.block}>
                <div className={styles.select_menu}>
                    <button type={'button'} onClick={()=> {this.selectFunction(CHANGE_TAB,'GAMES')}} className={gamesTab}>Игры</button>
                    <button type={'button'} onClick={()=> {this.selectFunction(CHANGE_TAB, 'TINKOFF')}} className={tinkoffTab}>Тинькофф</button>
                </div>
                <div className={styles.block_box}>
                    <div className={styles.block_filters}>
                        <h3 className={styles.filters_title}>Фильтр</h3>

                        <div className={styles.filter_wrapper}>
                            <ul className={styles.filters_list}>
                                <li className={styles.filter_item}>
                                    <button onClick={()=> {this.selectPlatform(CHANGE_PLATFORM, ALL_PLATFORMS)}} className={styles.filter_button} type={'button'}>Все</button>
                                </li>
                                <li className={styles.filter_item}>
                                    <button onClick={()=> {this.selectPlatform(CHANGE_PLATFORM, IOS_PLATFORM)}} className={styles.filter_button} type={'button'}>
                                        <Apple
                                            styles={styles.apple_img}
                                        />
                                    </button>
                                </li>
                                <li className={styles.filter_item}>
                                    <button onClick={()=> {this.selectPlatform(CHANGE_PLATFORM, ANDROID_PLATFORM)}} className={styles.filter_button} type={'button'}>
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

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onSelectFilter: (action, filter) => {
            dispatch({type: action, filter: filter})
        },
        onSelectPlatform: (action, platform) => {
            dispatch({type: action, platform: platform})
        }
    })

)(Filter);
