'use strict';

import './Administration.css';

import React from 'react';

import SelfUpdatingComponent from '../SelfUpdatingComponent';
import AdministrationSelector from './AdministrationSelector/AdministrationSelector';
import AdministrationEmployeeInfo from './AdministrationEmployeeInfo/AdministrationEmployeeInfo';
import EmployeesList from '../EmployeesList/EmployeesList';
import ModalHeader from '../Modal/ModalHeader/ModalHeader';
import ModalFooter from '../Modal/ModalFooter/ModalFooter';

import Actions from '../../actions/Actions';
import AdministrationStore from '../../stores/AdministrationStore';

export default class Administration extends SelfUpdatingComponent {
    constructor(props) {
        super(props);
        this.store = AdministrationStore;
        this.lazyLoadStoreAction = Actions.lazyLoadAdministration;

        this.showEmployeeInfo = this.showEmployeeInfo.bind(this);
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
        var selected = props.params.employeeId ? AdministrationStore.getEmployeeById(parseInt(props.params.employeeId, 10)) : null;
        this.setState({
            loaded: true,
            list: storeState.list,
            selected: selected
        });
    }

    showEmployeeInfo(employee) {
        Actions.routeTo(`/administration/${employee.id}`);
    }

    render() {
        var state = this.state;
        if (state.loaded === false)
            return (
                <div className="administration">
                    <ModalHeader title="АДМИНИСТРАЦИЯ" iconType="admin"/>
                    <div className="modal_content">
                        <div className="modal_loader">Загрузка списка сотрудников...</div>
                    </div>
                    <ModalFooter/>
                </div>);
        
        if (state.empty === true)
            return (
                <div className="administration">
                    <ModalHeader title="АДМИНИСТРАЦИЯ" iconType="admin"/>
                    <div className="modal_content">
                        <div className="modal_empty">Список сотрудников пуст. Приносим свои извинения.</div>
                    </div>
                    <ModalFooter/>
                </div>
            );

        var modelTitle = state.selected ? 
            state.selected.position === "DIRECTOR" ? "ДИРЕКТОР" : "ЗАМ. ДИРЕКТОРА" :
            "АДМИНИСТРАЦИЯ";

        var backUrl = state.selected ? "/administration" : null;

        var center = state.selected ?
            <AdministrationEmployeeInfo employee={state.selected}/> :
            <AdministrationSelector list={state.list}/>;
        return (
            <div className="administration">
                <ModalHeader title={modelTitle} iconType="admin" backUrl={backUrl}/>
                <div className="modal_content">
                    {center}
                    <EmployeesList
                        selected = {state.selected}
                        items = {AdministrationStore.state.list}
                        onItemSelect = {this.showEmployeeInfo}
                        groupBy = {{
                            prop: "position",
                            groups: [
                                {
                                    value: "DIRECTOR",
                                    name: "ДИРЕКТОРА"
                                },
                                {
                                    value: "DEPUTY_DIRECTOR",
                                    name: "ЗАМЕСТИТЕЛИ ДИРЕКТОРА"
                                }
                            ]
                        }}
                    />
                </div>
                <ModalFooter/>
            </div>
        );
    }
}