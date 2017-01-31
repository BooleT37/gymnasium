"use strict";

import './Teachers.css';

import React from 'react';

import TeacherInfo from './TeacherInfo/TeacherInfo'
import EmployeesList from '../EmployeesList/EmployeesList'
import ModalHeader from './../ModalHeader/ModalHeader';
import ModalFooter from './../ModalFooter/ModalFooter';

import Actions from '../../actions/Actions';
import TeachersStore from '../../stores/TeachersStore';

export default class Teachers extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };

        this.showTeacherInfo = this.showTeacherInfo.bind(this);
    }

    componentWillMount() {
        this.onComponentUpdate(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.onComponentUpdate(nextProps);
    }

    onComponentUpdate(newProps) {
        Actions.lazyLoadTeachers();
        this.onPropsChange(newProps);
    }

    componentDidMount() {
        this.unsubscribeFromStore = TeachersStore.listen(this.onStoreLoaded.bind(this));
    }

    onStoreLoaded() {
        this.onPropsChange(this.props);
    }

    onPropsChange(props) {
        var storeState = TeachersStore.state;
        if (!storeState.loaded) {
            this.setState({ loaded: false });
            return;
        }
        var id = parseInt(this.props.params.teacherId, 10);
        if (!id) {
            id = storeState.list[0].id;
            Actions.routeTo(`/teachers/${id}`);
            return;
        }
        this.setState({
            loaded: true,
            list: storeState.list,
            selected: TeachersStore.getTeacherById(id)
        });
    }

    showTeacherInfo(teacher) {
        this.setState({selected: teacher});
    }

    render() {
        var state = this.state;
        if (state.loaded === false)
            return (<div className="modal_loader">Загрузка списка учителей...</div>);
        return (
            <div className="teachers">
                <ModalHeader title="УЧИТЕЛЯ" iconType="mortarboard"/>
                <div className="modal_content graduateClass_center">
                    <TeacherInfo teacher={this.state.selected}/>
                    <EmployeesList
                        selected={state.selected}
                        items = {TeachersStore.state.list}
                        onItemSelect={this.showTeacherInfo}
                    />
                </div>
                <ModalFooter/>
            </div>
        )
    }
}