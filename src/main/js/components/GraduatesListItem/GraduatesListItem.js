"use strict";

import './GraduatesListItem.css';

import React from 'react';
import classnames from 'classnames';

import Actions from '../../actions/Actions'
import {fullNameToShortString} from './../../utils';

export default class GraduatesListItem extends React.Component {

    handleItemClick() {
        Actions.highlightGraduate(this.props.graduate);
    }

    handleShowInfoClick() {
        Actions.showGraduateInfo(this.props.graduate);
    }

    render() {
        var graduate = this.props.graduate;
        var graduateName = fullNameToShortString(graduate.lastName, graduate.firstName, graduate.patronymic);
        var itemContent = <span className={classnames("graduateListItem_name", { graduateListItem_name_famous: graduate.famous })}>{graduateName}</span>
        var contents;
        if (this.props.selected)
            contents = [
                <div className="graduateListItem graduateListItem_current" key="item">{itemContent}</div>,
                <div className="graduateListItem_showInfo" onClick={this.handleShowInfoClick.bind(this)} key="showInfo"></div>
            ]
        else
            contents = <div className="graduateListItem" onClick={this.handleItemClick.bind(this)}>{itemContent}</div>
            
        return (
            <div className="graduateListItemСontainer">
                {contents}
            </div>
        )}
}