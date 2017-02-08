'use strict';

import './Timeline.css';

import React from 'react';
import classnames from 'classnames';

const scaleWidth = 694;
const selectorHalfWidth = 73;
const mousHookRadius = 10;
//import classnames from 'classnames';

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.onComponentUpdate(props);

        this.onSelectorMouseDown = this.onSelectorMouseDown.bind(this);
        this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
        // this.addMouseMoveListener = this.addMouseMoveListener.bind(this);
        // this.removeMouseMoveListener = this.removeMouseMoveListener.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.onComponentUpdate(nextProps);
    }
    
    onComponentUpdate(newProps) {
        this.years = newProps.list.map(e => e.date.getFullYear()).sort((a, b) => a - b);
        var firstYear = this.years[0];
        var lastYear = this.years[this.years.length - 1];
        var yearInterval = lastYear - firstYear;
        this.yearOffsets = this.years.map(y => scaleWidth * (y - firstYear) / yearInterval);
        this.yearOffsetsWithShift = this.yearOffsets.map(offset => offset - selectorHalfWidth);
        this.currentYear = this.props.current.date.getFullYear();
    }

    componentDidMount() {
        // console.log(this.scaleRect.left);
        var left = this.scaleRect.left;
        this.mouseHooks = this.yearOffsets.map(offset => {var center = offset + left; return {left: center - mousHookRadius, right: center + mousHookRadius}});
        console.log(this.mouseHooks);
    }

    onSelectorMouseDown(e) {
        this.addMouseMoveListener();
        e.stopPropagation();
        e.preventDefault();
    }

    addMouseMoveListener() {
        var onMouseMove = this.onDocumentMouseMove;

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", function() {
            document.removeEventListener("mousemove", onMouseMove);
        });
    }

    onDocumentMouseMove(e) {
        // console.log(e.screenX);
        for (let i=0; i<this.mouseHooks.length; i++) {
            if (this.years[i] !== this.currentYear && this.mouseHooks[i].left <= e.screenX && e.screenX <= this.mouseHooks[i].right)
                this.props.onYearChange(this.years[i]);
        }
        
    }

    render() {
        if (this.years.length === 0)
            return null;
        var currentYear = this.currentYear;
        var currentYearIndex = this.years.indexOf(this.currentYear);
        var firstYear = this.years[0];
        var lastYear = this.years[this.years.length - 1];
        
        return (
            <div className="timeline">
                <div className={classnames("timeline_leftYear",{timeline_year_hidden: currentYear === firstYear})}>{firstYear}</div>
                <div className="timeline_scale" ref={(div) => {if (div) this.scaleRect = div.getBoundingClientRect()}}>
                    <div className="timeline_selector" onMouseDown={this.onSelectorMouseDown} style={{left: this.yearOffsetsWithShift[currentYearIndex]}}>
                        {currentYear}
                    </div>
                </div>
                <div className={classnames("timeline_rightYear",{timeline_year_hidden: currentYear === lastYear})}>{lastYear}</div>
            </div>
        )
    }
}