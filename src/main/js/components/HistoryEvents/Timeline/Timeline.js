'use strict';

import './Timeline.css';

import React from 'react';
import classnames from 'classnames';

import {removeDuplicates} from '../../../utils';

const scaleWidth = 907;
const selectorHalfWidth = 95;
const mousHookRadius = 12;
const yearLabelsShift = 5;

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.onComponentUpdate(props);

        this.onSelectorMouseDown = this.onSelectorMouseDown.bind(this);
        this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);

        this.selectPreviousYear = this.selectPreviousYear.bind(this);
        this.selectNextYear = this.selectNextYear.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.onComponentUpdate(nextProps);
    }
    
    onComponentUpdate(newProps) {
        this.years = removeDuplicates(newProps.list.map(e => e.date.getFullYear())).sort((a, b) => a - b);
        if (this.years.length === 1) {
            this.yearOffsets = [0];
            this.yearOffsetsWithShift = [-selectorHalfWidth];
        } else {
            var firstYear = this.years[0];
            var lastYear = this.years[this.years.length - 1];
            var yearInterval = lastYear - firstYear;
            this.yearOffsets = this.years.map(y => scaleWidth * (y - firstYear) / yearInterval);
            this.yearOffsetsWithShift = this.yearOffsets.map(offset => offset - selectorHalfWidth);
        }
        this.currentYear = this.props.current.date.getFullYear();
    }

    componentDidMount() {
        var left = this.scaleRect.left;
        this.mouseHooks = this.yearOffsets.map(offset => {var center = offset + left; return {left: center - mousHookRadius, right: center + mousHookRadius}});
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
        for (let i=0; i<this.mouseHooks.length; i++) {
            if (this.years[i] !== this.currentYear && this.mouseHooks[i].left <= e.screenX && e.screenX <= this.mouseHooks[i].right)
                this.props.onYearChange(this.years[i]);
        }
        
    }

    selectPreviousYear() {
        var currentYearIndex = this.years.indexOf(this.currentYear);
        if (currentYearIndex !== 0)
            this.props.onYearChange(this.years[currentYearIndex - 1]);
    }

    selectNextYear() {
        var currentYearIndex = this.years.indexOf(this.currentYear);
        if (currentYearIndex !== this.years.length - 1)
            this.props.onYearChange(this.years[currentYearIndex + 1]);
    }

    render() {
        if (this.years.length === 0)
            return null;
        var currentYear = this.currentYear;
        var currentYearIndex = this.years.indexOf(this.currentYear);
        var firstYear = this.years[0];
        var lastYear = this.years[this.years.length - 1];

        var yearLabels = this.years.slice(1, this.years.length - 1).map((year, i) => 
            (<div
                className={classnames("timeline_yearLabel", {timeline_yearLabel_hidden: currentYear === year})}
                style={{left: this.yearOffsets[i + 1] - yearLabelsShift}} key={i
                }>{year}</div>)
        )
        
        return (
            <div className="timeline">
                <div className={classnames("timeline_leftYear",{timeline_year_hidden: currentYear === firstYear})}>{firstYear}</div>
                <div className="timeline_scale" ref={(div) => {if (div) this.scaleRect = div.getBoundingClientRect()}}>
                    <div className="timeline_selector" onMouseDown={this.onSelectorMouseDown} style={{left: this.yearOffsetsWithShift[currentYearIndex]}}>
                        <div className="timeline_selectorLeftarrow" onClick={this.selectPreviousYear}></div>
                        <div className="timeline_selectorYear">{currentYear}</div>
                        <div className="timeline_selectorRightarrow" onClick={this.selectNextYear}></div>
                    </div>
                    {yearLabels}
                </div>
                <div className={classnames("timeline_rightYear",{timeline_year_hidden: this.years.length !== 1 && currentYear === lastYear})}>{lastYear}</div>
            </div>
        )
    }
}