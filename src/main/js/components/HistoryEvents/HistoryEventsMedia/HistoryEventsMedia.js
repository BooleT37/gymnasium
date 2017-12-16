'use strict';

import './HistoryEventsMedia.css';

import React from 'react';
import classnames from 'classnames';

import SelfUpdatingComponent from '../../SelfUpdatingComponent';
import HistoryEventsPhoto from './HistoryEventsPhoto/HistoryEventsPhoto';
import HistoryEventsVideo from './HistoryEventsVideo/HistoryEventsVideo';

import Actions from '../../../actions/Actions';
import HistoryEventsStore from '../../../stores/HistoryEventsStore';

export default class HistoryEventsMedia extends SelfUpdatingComponent {
    constructor(props) {
        super(props);
        this.store = HistoryEventsStore;
        this.lazyLoadStoreAction = Actions.lazyLoadHistoryEventsOfType;

        this.showPreviousItem = this.showPreviousItem.bind(this);
        this.showNextItem = this.showNextItem.bind(this);
        this.onCloseButtonClick = this.onCloseButtonClick.bind(this);
    }

    //todo надо всё же вынести эту логику в SelfUpdatingComponent
    onComponentUpdate(newProps) {
        Actions.lazyLoadHistoryEventsOfType(newProps.params.type);
        this.onPropsChange(newProps, this.store.state);
    }

    onPropsChange(props, storeState) {
        var type = props.params.type;
        var id = parseInt(this.props.params.eventId, 10);
        var list = storeState[type];
        if (!list) {
            this.setState({ loaded: false });
            return;
        }
        this.pathPrefix = type === "history" ? "history" : `traditions/${type}`;

        this.setState({
            loaded: true,
            list: list,
            currentEvent: this.store.getEventByTypeAndId(type, id),
            index: parseInt(this.props.params.index, 10)
        });
    }

    showPreviousItem() {
        Actions.routeTo(`/${this.pathPrefix}/${this.state.currentEvent.id}/${this.props.type}/${this.state.index - 1}`);
    }

    showNextItem() {
        Actions.routeTo(`/${this.pathPrefix}/${this.state.currentEvent.id}/${this.props.type}/${this.state.index + 1}`);
    }

    onCloseButtonClick() {
        Actions.routeTo(`/${this.pathPrefix}/${this.state.currentEvent.id}`);
    }

    render() {
        if (this.state.loaded === false)
            return (<div className="innerModal_loader">Загрузка...</div>);
        var state = this.state;
        var innerComponent;
        var items;
        if (this.props.type === "photo") {
            items = state.currentEvent.photoNames;
            innerComponent = <HistoryEventsPhoto src={`photos/${this.pathPrefix}/${items[state.index]}`}/>;
        } else {
            items = state.currentEvent.videoNames;
            innerComponent = <HistoryEventsVideo src={`videos/${this.pathPrefix}/${items[state.index]}`}/>;
        }
        return (
            <div className="historyEventsMedia">
                <div className={classnames(
                    "arrow_left",
                    "historyEventsMedia_arrow", 
                    {historyEventsMedia_arrow_hidden: state.index === 0})} onClick={this.showPreviousItem}>
                </div>
                <div className="historyEventsMedia_photoFrame">
                    {innerComponent}
                    <div className="closeButton historyEventsMedia_closeButton" onClick={this.onCloseButtonClick}></div>
                </div>
                <div className={classnames(
                    "arrow_right",
                    "historyEventsMedia_arrow", 
                    {historyEventsMedia_arrow_hidden: state.index === items.length - 1})} onClick={this.showNextItem}>
                </div>
            </div>
        );        
    }
}