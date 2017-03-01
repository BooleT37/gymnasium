'use strict';

import './RowForm.css';

import React from 'react';
import update from 'immutability-helper';

import {isoToServer, serverToIso} from './RowForm-dateConverter';
import {replaceNbsp} from '../../../../../utils';

import TableStore from '../../../TableStore';

const inputTypes = {
    STRING: "text",
    LINK: "text",
    NUMBER: "number",
    DATE: "date",
    LIST: "text", //todo сделать несколько инпутов
    PHOTO: "text",
    PHOTOS_LIST: "text",
    VIDEOS_LIST: "text",
     //обрабатывается отдельно
    // PHOTO, PHOTOS_LIST, TEXT, SELECT, BOOLEAN, FOREIGN_ID и CONTROLS обрабатываются отдельно
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
            if (value && prop.type === "DATE") {
                value = serverToIso(value);
            }
            if (value && prop.type === "LIST" || prop.type === "PHOTOS_LIST" ||  prop.type === "VIDEOS_LIST")
                value = value ? value.join(", ") : "";

            //for new entities to set default select value
            if (prop.nullable === false && !value)
                if (prop.type === "SELECT") {
                    var fixSelectValue = TableStore.state.fixSelectValues[prop.name];
                    if (fixSelectValue)
                        value = fixSelectValue;
                    else
                        value = prop.selectValues[0].value;
                } else {
                    if (prop.type === "FOREIGN_ID")
                        value = TableStore.state.foreignEntities[prop.relatedEntity][0].value;
                }
            form[prop.name] = value;
        });

        this.state = {
            form: form
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
    }

    handleInputChange(e) {
        var input = e.currentTarget;
        if (!input.name)
            throw new Error("need name attribute!");
        var formObj = {};
        var value;
        switch (input.type) {
            case "checkbox":
                value = input.checked;
                break;
            default:
                value = input.value;
        }
        formObj[input.name] = value;
        this.setState(update(this.state, {form: {$merge: formObj}}));
    }

    handleInputFocus(e) {
        e.target.select();
    }

    handleFormSubmit() {
        var properties = TableStore.state.properties;
        var form = {};
        var isValid = true;
        properties.forEach(prop => {
            if (!isValid)
                return;
            if (prop.name === "controls")
                return;
            var value = this.state.form[prop.name];

            if (prop.type === "NUMBER")
                if (value)
                    value = parseInt(value, 10);
                else
                    value = null;

            if (value && prop.type === "DATE")
                value = isoToServer(value);

            if (prop.type === "LIST" || prop.type === "PHOTOS_LIST" ||  prop.type === "VIDEOS_LIST") {
                value = value.split(", ");
                if (value.length === 1 && !value[0])
                    value = [];
            }

            if (prop.nullable === false && (value === null || value === undefined || (typeof value === "string" && value.length === 0))) {
                alert(`Поле '${prop.columnName}' обязательно для заполнения!`);
                isValid = false;
                return;
            }
            form[prop.name] = value;
            if (!this.props.entity.isNew)
                form.id = this.props.entity.id;
        });
        if (!isValid)
            return;
        this.props.onSubmit(form, this.state.uploadedPhoto);
    }

    handleInputKeyPress(target) {
        if(target.charCode==13){
            this.handleFormSubmit();
        }
    }

    handleDeletePhoto(event) {
        var name = event.target.getAttribute('data-name');
        var formObj = {};
        formObj[name] = "";
        this.setState(update(this.state, {form: {$merge: formObj}, uploadedPhoto: {$set: null}}));
    }

    cancelEdit() {
        this.props.onCancel();
    }

    render() {
        var entity = this.props.entity;
        var properties = TableStore.state.properties;
        var columns = properties.map((prop, i) => {
            var value = this.state.form[prop.name];
            var content;
            if (inputTypes[prop.type] !== undefined) {
                content = <input
                    className="rowForm_input"
                    name={prop.name}
                    type={inputTypes[prop.type]}
                    autoFocus={i === 0}
                    value={value}
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    onKeyPress={this.handleInputKeyPress} 
                />;
            } else {
                switch (prop.type) {
                    case("BOOLEAN"):
                        content = <input className="rowForm_input" name={prop.name} type="checkbox" checked={value} onChange={this.handleInputChange}/>;
                        break;
                    case("TEXT"):
                        content = <textarea
                            autoFocus={i === 0}
                            className="rowForm_input"
                            name={prop.name}
                            value={value}
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            />;
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
                                <button type="button" onClick={this.handleFormSubmit}>Сохранить</button>&nbsp;
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