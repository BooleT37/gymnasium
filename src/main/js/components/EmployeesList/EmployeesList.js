"use strict";

import './EmployeesList.css';

import React from 'react';
import classnames from 'classnames';
import CustomScroll from 'react-custom-scroll';

import {fullNameToShortString} from '../../utils';

export default class EmployeesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedItem: this.props.selected };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({selectedItem: nextProps.selected});
    }

    onItemClick(item) {
        this.setState({selectedItem: item});
        if (this.props.onItemSelect && typeof this.props.onItemSelect === 'function') {
            this.props.onItemSelect(item);
        }
    }

    render() {
        var state = this.state;
        var items = this.props.items.map((item, i) =>
            <div className={classnames("employeeList_item", {employeeList_item_selected: state.selectedItem && item.id === state.selectedItem.id})}
                key={i} onClick={this.onItemClick.bind(this, item)}>
                    <div className="employeeList_item_name">
                        {fullNameToShortString(item.firstName, item.lastName, item.patronymic)}
                    </div>
            </div>
        );
        return (
            <div className="employeesList">
                <CustomScroll>
                    <div className="employeesListInnerContainer">
                        {items}
                    </div>
                </CustomScroll>
            </div>
        );
    }
}