"use strict";

import React from 'react'
import Actions from '../actions/Actions'
import GraduatesStore from '../stores/GraduatesStore'

export default class GraduatesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }

    componentWillMount() {
        Actions.lazyLoadGraduatesForClass(this.props.classId);
        this.onStoreUpdated(GraduatesStore.state);
    }

    componentDidMount() {
        this.unsubscribe = GraduatesStore.listen(this.onStoreUpdated.bind(this));
    }

    onStoreUpdated(storeState) {
        if (storeState[this.props.classId]) {
            this.setState({
                loaded: true,
                list: storeState[this.props.classId]
            });
        }
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        if (this.state.loaded) {
            var graduates = this.state.list.map(g => <div className="graduateName" key={g.id}>
                {g.lastName + (g.firstName ? ". " + g.firstName[0].toUpperCase() : "") + (g.patronymic ? ". " + g.patronymic[0].toUpperCase() : "")}
            </div>)
            return <div className="graduatesList">{graduates}</div>
        } else {
            return <div className="graduatesList_loader">Загрузка списка учеников...</div>
        }
    }
}