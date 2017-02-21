'use strict';

import './RowForm.css';

import React from 'react';
import update from 'immutability-helper';

import {parseDate, parseDateIso, replaceNbsp} from '../../../../../utils';

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

        var form = {};
        var properties = TableStore.state.properties;
        var entity = this.props.entity;
        properties.forEach(prop => {
            var value = entity[prop.name];
            if (value === null || value === undefined)
                value = "";
            if (value && prop.type === "DATE")
                value = parseDate(value).toISOString().substring(0, 10);
            if (value && prop.type === "LIST")
                value = value.join(", ");
            form[prop.name] = value;
        })

        this.state = {
            form: form
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    handleInputChange(e) {
        var input = e.currentTarget;
        if (!input.name)
            throw new Error("need name attribute!");
        var setObj = {};
        setObj[input.name] = input.value;
        this.setState(update(this.state, {form: {$merge: setObj}}));
    }

    handleInputFocus(e) {
        e.target.select();
    }

    handleFormSubmit() {
        var properties = TableStore.state.properties;
        var form = {};
        properties.forEach(prop => {
            if (prop.name === "controls")
                return;
            var value = this.state.form[prop.name];
            if (value) {
                switch (prop.type) {
                    case "DATE":
                        value = parseDateIso(value).toISOString().substring(0, 10);
                        break;
                    case "LIST":
                        value = value.split(", ");
                        break;
                    case "NUMBER":
                    case "FOREIGN_ID":
                        value = parseInt(value, 10);
                        break;
                }
            }
            form[prop.name] = value;
        });
        this.props.onSubmit(form);
    }

    cancelEdit() {
        this.props.onCancel();
    }

    render() {
        var entity = this.props.entity;
        var properties = TableStore.state.properties;
        var columns = properties.map(prop => {
            var value = this.state.form[prop.name];
            var content;
            if (inputTypes[prop.type] !== undefined) {
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