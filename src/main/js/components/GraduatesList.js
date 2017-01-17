"use strict";

import React from 'react'
import Actions from '../actions/Actions'
import GraduatesStore from '../stores/GraduatesStore'
import GraduatesListItem from './GraduatesListItem'

export default class GraduatesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }

    componentWillMount() {
        Actions.lazyLoadGraduatesForClass(this.props.classId);
        this.onStoreUpdated();
    }

    componentDidMount() {
        this.unsubscribeFromStore = GraduatesStore.listen(this.onStoreUpdated.bind(this));
        this.unsubscribeFromHighlightGraduateAction = Actions.highlightGraduate.listen(this.highlightGraduate.bind(this));
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.classId !== nextProps.classId) {
            Actions.lazyLoadGraduatesForClass(nextProps.classId);
            this.setStateForClassId(nextProps.classId);
        }
    }

    onStoreUpdated() {
        this.setStateForClassId(this.props.classId);
    }

    setStateForClassId(classId) {
        var storeState = GraduatesStore.state;
        if (storeState[classId]) {
            this.setState({
                loaded: true,
                list: storeState[classId],
                chosen: null
            });
        }
    }

    highlightGraduate(graduate) {
        this.setState({
            chosen: graduate
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromStore();
        this.unsubscribeFromHighlightGraduateAction();
    }

    render() {
        if (this.state.loaded) {
            var graduates = this.state.list.map((g, i) => <GraduatesListItem key={g.id} graduate={g} index={i} chosen={this.state.chosen && this.state.chosen.id === g.id}>
                {g.lastName + (g.firstName ? ". " + g.firstName[0].toUpperCase() : "") + (g.patronymic ? ". " + g.patronymic[0].toUpperCase() : "")}
            </GraduatesListItem>)
            return <div className="graduatesList">{graduates}</div>
        } else {
            return <div className="graduatesList_loader">Загрузка списка учеников...</div>
        }
    }
}