import React, {Component} from 'react';
import styles from './Card.scss';
import Apple from "../SvgItems/AppleSvg";
import Android from "../SvgItems/AndroidSvg";
import {star} from '../SvgItems/StarSvg';
import {mark} from '../SvgItems/MarkSvg';

import CardBottomInfo from "../CardBottomInfo/CardBottomInfo";

export default class Card extends Component {
    render() {
        return(
            <div className={styles.block}>
                <div className={styles.block_top}>
                    <div className={styles.block_avatar}>
                        <img src={this.props.appAvatar} alt=""/>
                    </div>
                    <div className={styles.block_top_info}>
                        <div className={styles.app_name}>{this.props.appName}</div>
                        <div className={styles.app_info}>
                            <div className={styles.app_platform}>
                                {this.props.appPlatform === 'apple' && <Apple styles={styles.platform_img_apple}/>}
                                {this.props.appPlatform === 'android' && <Android styles={styles.platform_img_apple}/>}
                                <p className={styles.app_price}>{this.props.price}</p>
                            </div>
                            <div className={styles.app_rating}>
                                {star}
                                <p className={styles.app_rating_num}>{this.props.rating}</p>
                            </div>
                            <div className={styles.app_language}>
                                {mark}
                                <p className={styles.app_lang_text}>{this.props.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CardBottomInfo
                    aso={this.props.aso}
                    asoStats={this.props.asoStats}
                    installs={this.props.installs}
                    installsStats={this.props.installsStats}
                    category={this.props.category}
                    categoryStats={this.props.categoryStats}
                />
            </div>
        )
    }
}
