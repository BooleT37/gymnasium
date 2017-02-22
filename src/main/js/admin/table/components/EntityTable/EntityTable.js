"use strict";

import './EntityTable.css';

import React from 'react';

import RowForm from './RowForm/RowForm';
import TableStore from '../../TableStore';
import Actions from '../../Actions';
import {addBreakLines} from '../../../../utils';
import client from '../../../../client';

export default class EntityTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editingEntity: null,
            entities: TableStore.state.entities
        }

        this.onEditButtonClick = this.onEditButtonClick.bind(this);
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
        this.onAddEntityButtonClick = this.onAddEntityButtonClick.bind(this);
        this.onCancelEditButtonClick = this.onCancelEditButtonClick.bind(this);
        this.saveEntity = this.saveEntity.bind(this);
        this.addEntity = this.addEntity.bind(this);
    }

    componentDidMount() {
        TableStore.listen(storeState => { this.setState({entities: storeState.entities}); });
    }

    onEditButtonClick(event) {
        if (this.state.editingEntity === null) {
            var id = parseInt(event.currentTarget.getAttribute("data-id"), 10);
            var entity = TableStore.getEntityById(id);
            this.setState({
                editingEntity: entity
            });
        }
    }

    onCancelEditButtonClick() {
        // if (confirm("Действительно отменить редактирование?"))
        //     this.setState({ editingEntity: null });
        this.setState({ editingEntity: null });
    }
    
    handleError(message) {
        alert(`При отправке данных произошла ошибка:\nСообщение:\n${message || "[Сообщение об ошибке отсутствует]"}`);
    }

    saveEntity(entity) {
        client({
            method: 'PUT',
            path: `/api/graduates/${entity.id}`,
            entity: entity
        }).then(response => {
            this.setState({ editingEntity: null });
            Actions.updateEntity(response.entity);
        }).catch(response => {
            this.handleError(response.message);
        });
    }

    onDeleteButtonClick(event) {
        if (this.state.editingEntity === null) {
            if (confirm("Действительно удалить?")) {
                var id = parseInt(event.currentTarget.getAttribute("data-id"), 10);
                this.deleteEntity(id);
            }
        }
    }

    deleteEntity(id) {
        client({
            method: 'DELETE',
            path: `/api/graduates/${id}`
        }).then(response => {
            Actions.deleteEntityById(id);
        }).catch(response => {
            this.handleError(response.message);
        });
    }

    onAddEntityButtonClick(event) {
        if (this.state.editingEntity === null) {
            this.setState({
                editingEntity: { isNew: true }
            });
        }
    }

    addEntity(entity) {
        client({
            method: 'POST',
            path: `/api/graduates/`,
            entity: entity
        }).then(response => {
            this.setState({ editingEntity: null });
            Actions.addEntity(response.entity);
        }).catch(response => {
            this.handleError(response.message);
        });
    }

    entityToPlainRow(entity) {
        var properties = TableStore.state.properties;
        var columns = properties.map(prop => {
            var valueContent;
            var value = entity[prop.name];
            switch (prop.type) {
                case "TEXT":
                    valueContent = addBreakLines(value);
                    break;
                case "SELECT":
                    valueContent = value ? prop.selectValues.find(v => v.value === value).displayName : ""
                    break;
                case "FOREIGN_ID":
                    valueContent = TableStore.getForeignEntityByValue(prop.relatedEntity, entity[prop.name]).displayName;
                    break;
                case "BOOLEAN":
                    valueContent = value ? "Да" : "Нет";
                    break;
                case "LIST":
                    valueContent = value.join(", ");
                    break;
                case "CONTROLS":
                    valueContent = (
                        <div className="entityTable_controls">
                            <button
                                type="button"
                                data-id={entity.id}
                                onClick={this.onEditButtonClick}
                                disabled={this.state.editingEntity !== null}
                            >Изменить</button>&nbsp;
                            <button
                                type="button"
                                data-id={entity.id}
                                onClick={this.onDeleteButtonClick}
                                disabled={this.state.editingEntity !== null}
                            >Удалить</button>
                        </div>
                    );
                    break;
                case "LINK":
                    if (value) {
                        var name = value.substring(value.lastIndexOf("/") + 1);
                        valueContent = (
                            <a href={value}>{name}</a>
                        )
                    } else {
                        valueContent = "";
                    }
                    break;
                default:
                    valueContent = value;
                    
            }
            return (<td key={prop.name} className={`entityTable_cell_${prop.type.toLowerCase()}`}>{valueContent}</td>);
        });
        return (<tr key={entity.id}>{columns}</tr>);
    }

    entityToRowEdit(entity) {
        return (
            <RowForm key={entity.id} entity={entity} onSubmit={this.saveEntity} onCancel={this.onCancelEditButtonClick}/>
        );
    }

    entityToRow(entity) {
        if (this.state.editingEntity && this.state.editingEntity.id === entity.id)
            return this.entityToRowEdit(entity);
        else
            return this.entityToPlainRow(entity);
    }

    render() {
        var properties = TableStore.state.properties;
        var entities = this.state.entities;

        var headers = properties.map(prop => (
            <td key={prop.name} style={{width: prop.width ? (prop.width + "%") : "auto"}}>{prop.columnName || ""}</td>
        ));

        var rows = entities.map(entity => this.entityToRow(entity));
        if (this.state.editingEntity && this.state.editingEntity.isNew)
            rows.unshift(<RowForm key="-1" entity={this.state.editingEntity} onSubmit={this.addEntity} onCancel={this.cancelEdit}/>);

        return (
            <div className="entityTable">
                <div className="entityTable_inner">
                    <div className="entityTable_addEntityButtonContainer">
                        <button type="button" onClick={this.onAddEntityButtonClick} disabled={this.state.editingEntity !== null}>Добавить новую запись</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                {headers}
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}