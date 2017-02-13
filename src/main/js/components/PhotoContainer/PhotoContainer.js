'use strict';

import './PhotoContainer.css';

import React from 'react';

export default class PhotoContainer extends React.Component {
    render() {
        return (
            <div className="photoContainer">
                <div className="photoContainer_tableRow">
                    <div className="photoContainer_tableCell" style={{height: this.props.height}}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}