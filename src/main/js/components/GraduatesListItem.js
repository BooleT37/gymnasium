"use strict";

import React from 'react'
import Actions from '../actions/Actions'
import classnames from 'classnames';

export default class GraduatesListItem extends React.Component {

    handleClick() {
        Actions.highlightGraduate(this.props.graduate);
    }

    render() {
        var contents;
        if (this.props.chosen)
            contents = [
                this.props.children,
                <div className="graduateListItem_showInfo" key="si"></div>
            ]
        else
            contents = this.props.children;
            
        return (<div className={classnames("graduateListItem", {graduateListItem_current: this.props.chosen})} onClick={this.handleClick.bind(this)}>{contents}</div>)
    }
}