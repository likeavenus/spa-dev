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
            activeTab: this.props.store.activeTab,
            activeFilter: {
                tinkoff: {
                    ALL_PLATFORMS: true,
                    ANDROID_PLATFORM: false,
                    IOS_PLATFORM: false
                },
                games: {
                    ALL_PLATFORMS: true,
                    ANDROID_PLATFORM: false,
                    IOS_PLATFORM: false
                }
            }
        }
    }

    selectFunction = (action, activeTab) => {
        this.props.onSelectTab(action, activeTab);
        this.setState({
            activeTab: activeTab
        })
    };

    selectPlatform = (action, tinkoffPlatform, gamesPlatform) => {
        const newFilterState = {...this.state.activeFilter};

        if (this.props.store.activeTab === 'TINKOFF') {
            for (let key in newFilterState.tinkoff) {
                newFilterState.tinkoff[key] = false;
            }
            newFilterState.tinkoff[tinkoffPlatform] = true;
            this.setState({
                activeFilter: newFilterState
            });
            this.props.onSelectPlatform(action, tinkoffPlatform, this.props.store.filter['GAMES'].platform);

        } else if (this.props.store.activeTab === 'GAMES') {
            for (let key in newFilterState.games) {
                newFilterState.games[key] = false;
            }
            newFilterState.games[gamesPlatform] = true;
            this.setState({
                activeFilter: newFilterState
            });
            this.props.onSelectPlatform(action, this.props.store.filter['TINKOFF'].platform, gamesPlatform);
        } else {
            for (let key in newFilterState.games) {
                newFilterState.games[key] = false;
            }
            for (let key in newFilterState.tinkoff) {
                newFilterState.tinkoff[key] = false;
            }
            newFilterState.games[ALL_PLATFORMS] = true;
            newFilterState.tinkoff[ALL_PLATFORMS] = true;
            this.setState({
                activeFilter: newFilterState
            });
        }

    };


    render() {

        const {activeTab, activeFilter} = this.state;
        let tinkoffTab = styles.select_stage;
        let gamesTab = styles.select_stage;

        let allPlatformsButtonStyle = styles.filter_button;
        let iosPlatformsButtonStyle = styles.filter_button;
        let androidPlatformsButtonStyle = styles.filter_button;

        if(activeTab === 'TINKOFF') {
            tinkoffTab += ` ${styles.active}`;
            gamesTab = styles.select_stage;

            if (activeFilter.tinkoff.ALL_PLATFORMS) {
                allPlatformsButtonStyle += ` ${styles.active}`;
            } else if (activeFilter.tinkoff.IOS_PLATFORM) {
                iosPlatformsButtonStyle += ` ${styles.active}`;
            } else if (activeFilter.tinkoff.ANDROID_PLATFORM) {
                androidPlatformsButtonStyle += ` ${styles.active}`;
            }
        } else if(activeTab === 'GAMES'){
            tinkoffTab = styles.select_stage;
            gamesTab += ` ${styles.active}`;

            if (activeFilter.games.ALL_PLATFORMS) {
                allPlatformsButtonStyle += ` ${styles.active}`;
            } else if (activeFilter.games.IOS_PLATFORM) {
                iosPlatformsButtonStyle += ` ${styles.active}`;
            } else if (activeFilter.games.ANDROID_PLATFORM) {
                androidPlatformsButtonStyle += ` ${styles.active}`;
            }
        }

        console.log('activeFilter', activeFilter);


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
                                    <button onClick={()=> {this.selectPlatform(CHANGE_PLATFORM, ALL_PLATFORMS, ALL_PLATFORMS)}} className={allPlatformsButtonStyle} type={'button'}>Все</button>
                                </li>
                                <li className={styles.filter_item}>
                                    <button onClick={()=> {this.selectPlatform(CHANGE_PLATFORM, IOS_PLATFORM, IOS_PLATFORM)}} className={iosPlatformsButtonStyle} type={'button'}>
                                        <Apple
                                            styles={styles.apple_img}
                                        />
                                    </button>
                                </li>
                                <li className={styles.filter_item}>
                                    <button onClick={()=> {this.selectPlatform(CHANGE_PLATFORM, ANDROID_PLATFORM, ANDROID_PLATFORM)}} className={androidPlatformsButtonStyle} type={'button'}>
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
        onSelectTab: (action, activeTab) => {
            dispatch({type: action, activeTab: activeTab})
        },
        onSelectPlatform: (action, tinkoffPlatform, gamesPlatform) => {
            dispatch({type: action, 'TINKOFF': tinkoffPlatform, 'GAMES': gamesPlatform})
        }
    })

)(Filter);
