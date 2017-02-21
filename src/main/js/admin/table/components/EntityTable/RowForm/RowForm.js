'use strict';

import './RowForm.css';

import React from 'react';

import {parseDate, replaceNbsp} from '../../../../../utils';

import TableStore from '../../../TableStore';

const inputTypes = {
    STRING: "text",
    LINK: "text",
    NUMBER: "number",
    DATE: "date",
    LIST: "text", //todo сделать несколько инпутов
     //обрабатывается отдельно
    // TEXT, SELECT, BOOLEAN, FOREIGN_ID и CONTROLS обрабатываются отдельно
}

export default class RowForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    handleInputChange(e) {
        var input = e.currentTarget;
        var inputValue = e.value;
    }

    handleInputFocus(e) {
        e.target.select();
    }

    handleFormSubmit() {
        this.props.onSubmit(this.state.form);
    }

    cancelEdit() {
        this.props.onCancel();
    }

    render() {
        var entity = this.props.entity;
        var properties = TableStore.state.properties;
        var columns = properties.map(prop => {
            var value = entity[prop.name] || "";
            var content;
            if (inputTypes[prop.type] !== undefined) {
                if (prop.type === "DATE")
                    value = value ? parseDate(value).toISOString().substring(0, 10) : "";
                if (prop.type === "LIST")
                    value = value.join(", ");
                content = <input
                    className="rowForm_input"
                    name={prop.name}
                    type={inputTypes[prop.type]}
                    value={value}
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                />;
            } else {
                switch (prop.type) {
                    case("BOOLEAN"):
                        content = <input className="rowForm_input" name={prop.name} type="checkbox" value={value} onChange={this.handleInputChange}/>;
                        break;
                    case("TEXT"):
                        content = <textarea className="rowForm_input" name={prop.name} value={value} onChange={this.handleInputChange} onFocus={this.handleInputFocus}/>;
                        break;
                    case("SELECT"):
                        var options = prop.selectValues.map(v => (<option value={v.value} key={v.value}>{v.displayName}</option>));
                        content = (<select className="rowForm_input" name={prop.name} value={value} onChange={this.handleInputChange}>{options}</select>);
                        break;
                    case("FOREIGN_ID"):
                        var foreignEntities = TableStore.state.foreignEntities[prop.relatedEntity];
                        var options = foreignEntities.map(v => (<option value={v.value} key={v.value}>{v.displayName}</option>));
                        content = (<select className="rowForm_input" name={prop.name} value={value} onChange={this.handleInputChange}>{options}</select>);
                        break;
                    case("CONTROLS"):
                        content = (
                            <div className="rowForm_controls">
                                <button type="button" onClick={this.handleFormSubmit}>Сохранить</button>
                                <button type="button" onClick={this.cancelEdit}>Отмена</button>
                            </div>
                        );
                        break;
                    default:
                        throw new Error(`Wrong property type ${prop.type}`);
                }
            }
            return (
                <td className="rowForm_formCell" key={prop.name}>
                    {content}
                </td>);
        });
        return (
            <tr className="rowForm">
                {columns}
            </tr>
        )
    }
}