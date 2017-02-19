"use strict";

import './EntityTable.css';

import React from 'react';

import TableStore from '../../TableStore';

export default class EntityTable extends React.Component {
    render() {
        function entityToRow(entity, properties) {
            var columns = properties.map(prop => {
                var value;
                if (prop.type === "FOREIGN_ID")
                    value = TableStore.getForeignEntityByValue(prop.relatedEntity, entity[prop.name]).name;
                else if (prop.type === "BOOLEAN")
                        value = entity[prop.name] ? "Да" : "Нет"
                    else
                        value = entity[prop.name];
                return (<td data-id={entity.id} key={prop.name}>{value}</td>);
            });
            return (<tr key={entity.id}>{columns}</tr>);
        }

        var properties = TableStore.state.properties;
        var entities = TableStore.state.entities;
        var foreignEntities = TableStore.state.foreignEntities;

        var headers = properties.map(prop => (
            <td style={{width: prop.width}} key={prop.name}>{prop.columnName}</td>
        ));
        var rows = entities.map(entity => entityToRow(entity, properties));
        return (
            <div className="entityTable">
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
        )
    }
}