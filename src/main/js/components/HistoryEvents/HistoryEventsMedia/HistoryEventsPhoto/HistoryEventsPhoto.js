'use strict';

import './HistoryEventsPhoto.css';

import React from 'react';

export default class HistoryEventsPhoto extends React.Component {
    render() {
        return (
            <div className="historyEventsPhoto">
                <img src={this.props.src} alt="photo" className="historyEventsPhoto_photo"/>
            </div>
        )
    }
}