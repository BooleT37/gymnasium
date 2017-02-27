'use strict';

import './HistoryEventsList.css';

import React from 'react';
import classnames from 'classnames';
import CustomScroll from 'react-custom-scroll';

export default class HistoryEventsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedEvent: this.props.selected };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({selectedEvent: nextProps.selected});
    }

    onItemClick(event) {
        this.setState({selectedEvent: event});
        this.props.onSelect(event);
    }

    render() {
        var state = this.state;
        var items = this.props.list.map((event, i) =>
            <div className={classnames("historyEventsList_item", {historyEventsList_item_selected: state.selectedEvent && event.id === state.selectedEvent.id})}
                key={i} onClick={this.onItemClick.bind(this, event)}>
                    <div className="historyEventsList_item_name">
                        {event.name}
                    </div>
            </div>
        );
        return (
            <div className="historyEventsList">
                <CustomScroll>
                    <div className="historyEventsList_innerContainer">
                        {items}
                    </div>
                </CustomScroll>
            </div>
        )
    }
}