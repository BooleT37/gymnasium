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

    renderItems(items) {
        return items.map((item, i) => (
            <div className={classnames("employeeList_item", {employeeList_item_selected: this.state.selectedItem && item.id === this.state.selectedItem.id})}
                key={i} onClick={this.onItemClick.bind(this, item)}>
                    <div className="employeeList_item_name">
                        {fullNameToShortString(item.firstName, item.lastName, item.patronymic)}
                    </div>
            </div>)
        );
    }

    render() {
        var state = this.state;
        var items;
        if (this.props.groupBy) {
            var groupBy = this.props.groupBy;
            items = groupBy.groups.map(group => {
                var items = this.props.items.filter(item => item[groupBy.prop] === group.value)
                return (
                    <div className="employeeList_group" key={group.value + "_group"}>
                        <div className="employeeList_groupTitle">{group.name}</div>
                        <div className="employeeList_groupItems">{this.renderItems(items)}</div>
                    </div>
                );
            })
        } else {
            items = this.renderItems(this.props.items);
        }
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