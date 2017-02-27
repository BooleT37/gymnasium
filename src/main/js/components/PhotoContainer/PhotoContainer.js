'use strict';

import './PhotoContainer.css';

import React from 'react';
import classnames from 'classnames';

export default class PhotoContainer extends React.Component {
    render() {
        return (
            <div className={classnames("photoContainer", this.props.className)} onClick={this.props.onClick}>
                <div className="photoContainer_tableRow">
                    <div className="photoContainer_tableCell" style={{height: this.props.height}}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}