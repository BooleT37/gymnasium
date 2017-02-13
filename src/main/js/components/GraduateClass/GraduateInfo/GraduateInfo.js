"use strict";

import './GraduateInfo.css';

import React from 'react';
import classnames from 'classnames';
import CustomScroll from 'react-custom-scroll';

import Actions from '../../../actions/Actions';
import GraduatesStore from '../../../stores/GraduatesStore';
import PhotoContainer from '../../PhotoContainer/PhotoContainer';
import {fullNameToString} from '../../../utils';

export default class GraduateInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }

     componentWillMount() {
        this.onComponentUpdate(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.graduateId !== nextProps.graduateId) {
            this.onComponentUpdate(nextProps);
        }
    }

    onComponentUpdate(newProps) {
        Actions.lazyLoadGraduatesForClass(newProps.classId);
        this.setStateForProps(newProps);
    }

    componentDidMount() {
        this.unsubscribeFromStore = GraduatesStore.listen(this.onStoreUpdated.bind(this));
    }

    onStoreUpdated(storeState) {
        this.setStateForProps(this.props);
    }

    setStateForProps(props) {
        var storeState = GraduatesStore.state;
        if (storeState[props.classId]) {
            var gradaute;
            try {
                gradaute = GraduatesStore.getGraduateById(props.graduateId, props.classId)
            } catch (e) {
                if (console)
                    console.log(e.message);
                Actions.routeTo(`/graduateClasses/${props.classId}`);
                return;
            }
            this.setState({
                loaded: true,
                graduate: gradaute
            });
        } else {
            this.setState({ loaded: false });
        }
    }


    componentWillUnmount() {
        this.unsubscribeFromStore();
    }

    render() {
        if (this.state.loaded) {
            var graduate = this.state.graduate;

            function generateLink(href, imageClassName) {
                if (href) {
                    return (
                        <a href={href} target="_blank" className="graduateInfo_link">
                            <div className={imageClassName}></div>
                        </a>
                    )
                } else {
                    return (
                        <span className="graduateInfo_link graduateInfo_disabledLink">
                            <span className={imageClassName}></span>
                        </span>
                    )
                }
            }

            function generateRow(rowTitle, rowContent, isInline=false, cls) {
                if (!rowContent)
                    return null;
                return (
                    <div className={classnames(
                            "graduateInfo_row", cls,
                            { graduateInfo_inlineRow: isInline, graduateInfo_blockRow: !isInline }
                        )}>
                        <div className="graduateInfo_rowTitle">{rowTitle + ":"}</div>
                        <div className="graduateInfo_rowContent">{rowContent}</div>
                    </div>
                )
            }

            var photoSrc = graduate.photoName ? `/images/photos/graduates/${graduate.photoName}` : "images/no_photo.png";

            return (
                <div className="graduateInfo">
                    <div className="graduateInfo_left">
                        <div className="photoFrame graduateInfo_photoFrame">
                            <PhotoContainer height={365}>
                                <img src={photoSrc} alt="photo" className="graduateInfo_photo"/>
                            </PhotoContainer>
                        </div>
                        <div className="GraduateInfo_links">
                            {generateLink(graduate.facebookLink, "graduateInfo_socialLogo facebookLogo")}
                            {generateLink(graduate.vkLink, "graduateInfo_socialLogo vkLogo")}
                        </div>
                    </div>
                    <div className="graduateInfo_right">
                        <div className="graduateInfo_table graduateInfo_rightWrapper">
                            <div className="graduateInfo_tableRow graduateInfo_title">{fullNameToString(graduate.lastName, graduate.firstName, graduate.patronymic)}</div>
                            <div className="graduateInfo_tableRow graduateInfo_dataWrapper">
                                <div className="graduateInfo_tableCell graduateInfo_dataOuterWrapper">
                                    <div className="graduateInfo_dataInnerrWrapper">
                                        <div className="graduateInfo_data">
                                            {generateRow("Дата рождения", graduate.birthDate, true)}
                                            {generateRow("Интересы", graduate.interests, true)}
                                            {generateRow("Любимые предметы в школе", graduate.favouriteSubjects)}
                                            {generateRow("Достижения", graduate.achievements, false, "graduateInfo_achievementsRow")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="graduateInfo">
                    <div className="GraduateInfo_loader">Загрузка...</div>
                </div>)
        }
    }
}