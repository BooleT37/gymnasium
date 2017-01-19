"use strict";

import './GraduatesListItem.css';

import React from 'react';
import classnames from 'classnames';

import Actions from '../../actions/Actions'

export default class GraduatesListItem extends React.Component {

    handleItemClick() {
        Actions.highlightGraduate(this.props.graduate);
    }

    handleShowInfoClick() {
        Actions.showGraduateInfo(this.props.graduate);
    }

    render() {
        var contents;
        if (this.props.selected)
            contents = [
                <div className="graduateListItem graduateListItem_current" key="item">{this.props.children}</div>,
                <div className="graduateListItem_showInfo" onClick={this.handleShowInfoClick.bind(this)} key="showInfo"></div>
            ]
        else
            contents = <div className="graduateListItem" onClick={this.handleItemClick.bind(this)}>{this.props.children}</div>
            
        return (
            <div className="graduateListItemСontainer">
                {contents}
            </div>
        )}
}