"use strict";

import './Teachers.css';

import React from 'react';

import SelfUpdatingComponent from '../SelfUpdatingComponent';
import TeacherInfo from './TeacherInfo/TeacherInfo';
import EmployeesList from '../EmployeesList/EmployeesList';
import ModalHeader from '../Modal/ModalHeader/ModalHeader';
import ModalFooter from '../Modal/ModalFooter/ModalFooter';

import Actions from '../../actions/Actions';
import TeachersStore from '../../stores/TeachersStore';

export default class Teachers extends SelfUpdatingComponent {
    constructor(props) {
        super(props);
        this.store = TeachersStore;
        this.lazyLoadStoreAction = Actions.lazyLoadTeachers;

        this.showTeacherInfo = this.showTeacherInfo.bind(this);
    }

    onPropsChange(props, storeState) {
        if (!storeState.loaded) {
            this.setState({ loaded: false });
            return;
        }
        if (storeState.list.length === 0) {
            this.setState({
                loaded: true,
                empty: true
            });
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
            return (
                <div className="teachers">
                    <ModalHeader title="УЧИТЕЛЯ" iconType="mortarboard"/>
                    <div className="modal_content">
                        <div className="modal_loader">Загрузка списка учителей...</div>
                    </div>
                    <ModalFooter/>
                </div>
            );
        if (state.empty === true)
            return (
                <div className="teachers">
                    <ModalHeader title="УЧИТЕЛЯ" iconType="mortarboard"/>
                    <div className="modal_content">
                        <div className="modal_empty">Список учителей пуст. Приносим свои извинения.</div>
                    </div>
                    <ModalFooter/>
                </div>
            );
        return (
            <div className="teachers">
                <ModalHeader title="УЧИТЕЛЯ" iconType="mortarboard"/>
                <div className="modal_content">
                    <TeacherInfo teacher={this.state.selected}/>
                    <EmployeesList
                        selected = {state.selected}
                        items = {TeachersStore.state.list}
                        onItemSelect = {this.showTeacherInfo}
                    />
                </div>
                <ModalFooter/>
            </div>
        )
    }
}