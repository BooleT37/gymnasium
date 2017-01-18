"use strict";

import React from 'react';
import Actions from '../actions/Actions';
import GraduatesStore from '../stores/GraduatesStore';
import GraduatesListItem from './GraduatesListItem';
import {fullNameToShortString} from './../utils';

export default class GraduatesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }

    componentWillMount() {
        this.onComponentUpdate(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.classId !== nextProps.classId) {
            this.onComponentUpdate(nextProps);
        }
    }

    onComponentUpdate(newProps) {
        Actions.lazyLoadGraduatesForClass(newProps.classId);
        this.setStateForProps(newProps);
    }

    componentDidMount() {
        this.unsubscribeFromStore = GraduatesStore.listen(this.onStoreUpdated.bind(this));
        this.unsubscribeFromHighlightGraduateAction = Actions.highlightGraduate.listen(this.highlightGraduate.bind(this));
    } 

    onStoreUpdated() {
        this.setStateForProps(this.props);
    }

    setStateForProps(props) {
        var storeState = GraduatesStore.state;
        if (storeState[props.classId]) {
            this.setState({
                loaded: true,
                list: storeState[props.classId],
                selected: GraduatesStore.getGraduateById(props.selectedGraduateId, props.classId)
            });
        }
    }

    highlightGraduate(graduate) {
        this.setState({
            selected: graduate
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromStore();
        this.unsubscribeFromHighlightGraduateAction();
    }

    render() {
        if (this.state.loaded) {
            var graduates = this.state.list.map((g, i) => <GraduatesListItem key={g.id} graduate={g} index={i} selected={this.state.selected && this.state.selected.id === g.id}>
                {fullNameToShortString(g.lastName, g.firstName, g.patronymic)}
            </GraduatesListItem>)
            return <div className="graduatesListContainer"><div className="graduatesList">{graduates}</div></div>
        } else {
            return <div className="graduatesList_loader">Загрузка списка учеников...</div>
        }
    }
}