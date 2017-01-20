"use strict";

import './GraduatesList.css';

import React from 'react';
import CustomScroll from 'react-custom-scroll';

import Actions from '../../actions/Actions';
import GraduatesStore from '../../stores/GraduatesStore';
import GraduatesListItem from './../GraduatesListItem/GraduatesListItem';

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
            var selected = null;
            if (props.selectedGraduateId) {
                try {
                    selected = GraduatesStore.getGraduateById(props.selectedGraduateId, props.classId)
                } catch (e) {
                    if (console)
                        console.log(e.message);
                }
            }
            this.setState({
                loaded: true,
                list: storeState[props.classId],
                selected: selected
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
            var graduates = this.state.list.map((g, i) => <GraduatesListItem key={g.id} graduate={g} index={i} selected={this.state.selected && this.state.selected.id === g.id}/>)
            return (
                <div className="graduatesListOuterContainer">
                    <CustomScroll>
                        <div className="graduatesListInnerContainer">
                            <div className="graduatesList">{graduates}</div>
                        </div>
                    </CustomScroll>
                </div>)
        } else {
            return <div className="graduatesList_loader">Загрузка списка учеников...</div>
        }
    }
}