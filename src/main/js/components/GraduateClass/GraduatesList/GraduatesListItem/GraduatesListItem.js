"use strict";

import './GraduatesListItem.css';

import React from 'react';
import classnames from 'classnames';

import Actions from '../../../../actions/Actions'
import {fullNameToShortString} from '../../../../utils';

export default class GraduatesListItem extends React.Component {
    constructor(props) {
        super(props);

        this.showInfo = this.showInfo.bind(this);
        this.highlightGraduate = this.highlightGraduate.bind(this);
        this.showInfoAndHighlightGraduate = this.showInfoAndHighlightGraduate.bind(this);
    }

    highlightGraduate() {
        Actions.highlightGraduate(this.props.graduate);
    }

    showInfo() {
        Actions.showGraduateInfo(this.props.graduate);
    }

    showInfoAndHighlightGraduate() {
        this.showInfo();
        this.highlightGraduate();
    }

    render() {
        var graduate = this.props.graduate;
        var graduateName = fullNameToShortString(graduate.firstName, graduate.lastName, graduate.patronymic);
        var itemContent = <span className={classnames("graduateListItem_name", { graduateListItem_name_famous: graduate.famous })}>{graduateName}</span>
        var contents;
        if (this.props.selected)
            if (this.props.showInfoOnClick)
                contents = <div className="graduateListItem graduateListItem_current">{itemContent}</div>
            else
                contents = [
                    <div className="graduateListItem graduateListItem_current" key="item">{itemContent}</div>,
                    <div className="graduateListItem_showInfo" onClick={this.showInfo} key="showInfo"></div>
                ]
        else
            if (this.props.showInfoOnClick)
                contents = <div className="graduateListItem" onClick={this.showInfoAndHighlightGraduate}>{itemContent}</div>
            else
                contents = <div className="graduateListItem" onClick={this.highlightGraduate}>{itemContent}</div>
            
        return (
            <div className="graduateListItemСontainer">
                {contents}
            </div>
        )}
}