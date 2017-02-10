'use strict';

import './HistoryEventsVideo.css';

import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';


export default class HistoryEventsVideo extends React.Component {
    constructor(props) {
        super(props);

        this.setUpVideoJs = this.setUpVideoJs.bind(this);
    }

    setUpVideoJs(node) {
        if (!node)
            return;
        this.player = videojs(node);
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    render() {
        return (
            <div className="historyEventsVideo">
                 <video ref={this.setUpVideoJs} src={this.props.src} type='video/mp4' className="video-js" width="640px" height="267px"
                    controls preload="none" data-setup='{}'>
                </video>
            </div>
        );
    }
}