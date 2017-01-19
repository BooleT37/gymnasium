"use strict";

import './GraduateInfo.css';

import React from 'react';
import classnames from 'classnames';

import Actions from '../../actions/Actions';
import GraduatesStore from '../../stores/GraduatesStore';
import {fullNameToString} from './../../utils';

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
                            { graduateInfo_inlineRow: isInline }
                        )}>
                        <div className="graduateInfo_rowTitle">{rowTitle + ":"}</div>
                        <div className="graduateInfo_rowContent">{rowContent}</div>
                    </div>
                )
            }

            var photoSrc = "/images/graduate_photos/" + (graduate.photoName || "no_photo.png");

            return (
                <div className="graduateInfo">
                    <div className="graduateInfo_left">
                        <div className="graduateInfo_photoFrame">
                            <img src={photoSrc} alt="photo" className="graduateInfo_photo" width="285" height="285"></img>
                        </div>
                        <div className="GraduateInfo_links">
                            {generateLink(graduate.facebookLink, "graduateInfo_facebookLinkImage")}
                            {generateLink(graduate.vkLink, "graduateInfo_vkLinkImage")}
                        </div>
                    </div>
                    <div className="graduateInfo_right">
                        <div className="graduateInfo_title">{fullNameToString(graduate.lastName, graduate.firstName, graduate.patronymic)}</div>
                        {generateRow("Дата рождения", graduate.birthDate, true)}
                        {generateRow("Интересы", graduate.interests, true)}
                        {generateRow("Любимые предметы в школе", graduate.favouriteSubjects)}
                        {generateRow("Достижения", graduate.achievements, false, "graduateInfo_achievementsRow")}
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