'use strict';

import './HistoryEvents.css';

import React from 'react';
import classnames from 'classnames';

import SelfUpdatingComponent from '../SelfUpdatingComponent';
import ModalHeader from '../Modal/ModalHeader/ModalHeader';
import ModalFooter from '../Modal/ModalFooter/ModalFooter';
import Timeline from './Timeline/Timeline';

import Actions from '../../actions/Actions';
import HistoryEventsStore from '../../stores/HistoryEventsStore';

const modalTitles = {
    history: "ИСТОРИЯ",
    literature_club: "ЛИТЕРАТУРНЫЕ ГОСТИННЫЕ",
    sport: "СПОРТ",
    art: "ТВОРЧЕСТВО",
    science: "НАУКА",
    travel: "ПУТЕШЕСТВИЯ"
};

const modalIcons = {
    history: "book",
    literature_club: "scroll",
    sport: "darts",
    art: "easel",
    science: "bulbs",
    travel: "map"
}

export default class HistoryEvents extends SelfUpdatingComponent {
    constructor(props) {
        super(props);
        this.store = HistoryEventsStore;
        this.lazyLoadStoreAction = Actions.lazyLoadHistoryEventsOfType;

        this.onArrowLeftClick = this.onArrowLeftClick.bind(this);
        this.onArrowRightClick = this.onArrowRightClick.bind(this);
        this.onPhotosClick = this.onPhotosClick.bind(this);
        this.onVideosClick = this.onVideosClick.bind(this);
        this.onYearChange = this.onYearChange.bind(this);
    }

    onComponentUpdate(newProps) {
        Actions.lazyLoadHistoryEventsOfType(newProps.params.type);
        this.onPropsChange(newProps, this.store.state);
    }

    onPropsChange(props, storeState) {
        var type = props.params.type;
        var list = storeState[type];
        if (!list) {
            this.setState({ loaded: false });
            return;
        }

        this.pathPrefix = type === "history" ? "/history" : `/traditions/${type.toLowerCase()}`;

        
        this.firstEventForEachYear = {};
        var lastYear = null;
        list.forEach((event, i) => {
            var year = event.date.getFullYear();
            if (lastYear !== year) {
                this.firstEventForEachYear[year] = event;
                lastYear = year;
            }                
        });

        var id = parseInt(props.params.eventId, 10);
        //location.hash is "#/history|(traditions/...)/event/eventId"
        if (id) {
            var currentEvent = this.store.getEventByTypeAndId(type, id);
            var currentEventIndex = list.map(e => e.id).indexOf(id);
            this.setState({
                loaded: true,
                list: list,
                currentEvent: currentEvent,
                previousEvent: currentEventIndex === 0 ? null : list[currentEventIndex - 1],
                nextEvent: currentEventIndex === list.length - 1 ? null : list[currentEventIndex + 1]
            });
        //location.hash is "#/history|(traditions/...)"
        } else {
            id = list[0].id;
            Actions.routeTo(`${this.pathPrefix}/${id}`);
        }
    }

    onArrowLeftClick() {
        Actions.routeTo(`${this.pathPrefix}/${this.state.previousEvent.id}`);
    }

    onArrowRightClick() {
        Actions.routeTo(`${this.pathPrefix}/${this.state.nextEvent.id}`);
    }

    onPhotosClick() {
        Actions.routeTo(`${this.pathPrefix}/${this.state.currentEvent.id}/photo/0`);
    }

    onVideosClick() {
        Actions.routeTo(`${this.pathPrefix}/${this.state.currentEvent.id}/video/0`);
    }

    onYearChange(year) {
        // console.log(year);
        Actions.routeTo(`${this.pathPrefix}/${this.firstEventForEachYear[year].id}`);
    }

    render() {
        var state = this.state;
        var type = this.props.params.type;
        var event = state.currentEvent;

        if (state.loaded === false || type === undefined)
            return (<div className="modal_loader">Загрузка событий...</div>);

        var photoPreview = (event.photoNames && event.photoNames.length) ?
            <div className="historyEvents_photoContainer">
                <img
                    src={`images/photos/${this.pathPrefix}/${event.photoNames[0]}`}
                    alt="Photo preview"
                    className="historyEvents_imagePreview"
                />
            </div> :
            null;

        var backUrl = type === "history" ? null : "/traditions";
        
        return (
            <div className="historyEvents">
                <ModalHeader title={modalTitles[type]} iconType={modalIcons[type]} backUrl={backUrl}/>
                <div className="modal_content historyEvents_content">
                    <div
                        className={classnames("arrow_left", "historyEvents_arrowLeft", {historyEvents_arrow_disabled: state.previousEvent === null})}
                        onClick={this.onArrowLeftClick}></div>
                    <div className="historyEvents_innerContent">
                        <div className="historyEvents_left">
                            <div className="historyEvents_photoFrame">
                                {photoPreview}
                            </div>
                            <div className="historyEvents_leftButtons">
                                <div className={classnames(
                                    "historyEvents_button",
                                    "historyEvents_photosButton",
                                    {historyEvents_button_disabled: !event.photoNames || !event.photoNames.length}
                                    )} onClick={this.onPhotosClick}></div>
                                <div className={classnames(
                                    "historyEvents_button",
                                    "historyEvents_videosButton",
                                    {historyEvents_button_disabled: !event.videoNames || !event.videoNames.length}
                                    )} onClick={this.onVideosClick}></div>
                            </div>
                        </div>
                        <div className="historyEvents_right">
                            <div className="historyEvents_date">
                                {event.dateStr}
                            </div>
                            <div className="historyEvents_description">
                                { /* todo: добавить обработку абзацев */ }
                                {event.description}
                            </div>
                        </div>
                    </div>
                    <div
                        className={classnames("arrow_right", "historyEvents_arrowRight", {historyEvents_arrow_disabled: state.nextEvent === null})}
                        onClick={this.onArrowRightClick}></div>
                </div>
                <ModalFooter>
                    <Timeline list={state.list} current={state.currentEvent} onYearChange={this.onYearChange}/>
                </ModalFooter>
            </div>
        )
    }
}