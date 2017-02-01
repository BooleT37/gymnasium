'use strict';

import './Administration.css';

import React from 'react';

import AdministrationSelector from './AdministrationSelector/AdministrationSelector';
import AdministrationEmployeeInfo from './AdministrationEmployeeInfo/AdministrationEmployeeInfo';
import EmployeesList from '../EmployeesList/EmployeesList';
import ModalHeader from '../Modal/ModalHeader/ModalHeader';
import ModalFooter from '../Modal/ModalFooter/ModalFooter';

import Actions from '../../actions/Actions';
import AdministrationStore from '../../stores/AdministrationStore';

export default class Administration extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };

        this.showEmployeeInfo = this.showEmployeeInfo.bind(this);
    }

    componentWillMount() {
        this.onComponentUpdate(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.onComponentUpdate(nextProps);
    }

    onComponentUpdate(newProps) {
        Actions.lazyLoadAdministration();
        this.onPropsChange(newProps);
    }

    componentDidMount() {
        this.unsubscribeFromStore = AdministrationStore.listen(this.onStoreLoaded.bind(this));
    }

    onStoreLoaded() {
        this.onPropsChange(this.props);
    }

    onPropsChange(props) {
        var storeState = AdministrationStore.state;
        if (!storeState.loaded) {
            this.setState({ loaded: false });
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
            return (<div className="modal_loader">Загрузка списка учителей...</div>);

        var modelTitle = state.selected ? 
            state.selected.position === "DIRECTOR" ? "ДИРЕКТОР" : "ЗАМ. ДИРЕКТОРА" :
            "АДМИНИСТРАЦИЯ"

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
                    />
                </div>
                <ModalFooter/>
            </div>
        );
    }
}