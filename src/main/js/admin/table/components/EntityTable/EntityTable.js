'use strict';

import './EntityTable.css';

import React from 'react';
import Loader from 'react-loader';

import RowForm from './RowForm/RowForm';
import TableStore from '../../TableStore';
import Actions from '../../Actions';
import {addBreakLines} from '../../../../utils';
import client from '../../../../client';
import clientMultipart from '../../../../client-multipart';

export default class EntityTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editingEntity: null,
            entities: TableStore.state.entities,
            loading: false
        }

        this.onEditButtonClick = this.onEditButtonClick.bind(this);
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
        this.onAddEntityButtonClick = this.onAddEntityButtonClick.bind(this);
        this.onCancelEditButtonClick = this.onCancelEditButtonClick.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
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
        this.setState({ editingEntity: null });
    }
    
    handleError(response) {
        var message = response.entity ? (response.entity.message || response.entity) : response.message;
        alert(`При отправке данных произошла ошибка:\nСообщение:\n${message || "[Сообщение об ошибке отсутствует]"}`);
    }

    onFormSubmit(entity, photosToAdd, videosToAdd, photosToDelete, videosToDelete) {
        var promise = Promise.resolve();
        var i;
        var savePhoto = (photo) => () => this.savePhoto(photo);
        var saveVideo = (video) => () => this.saveVideo(video);
        var deletePhoto = (photoName) => () => this.deletePhoto(photoName);
        var deleteVideo = (videoName) => () => this.deleteVideo(videoName);

        this.setState({loading: true});

        for (i = 0; i < photosToAdd.length; i++) {
            promise = promise.then(savePhoto(photosToAdd[i]));
        }

        for (i = 0; i < videosToAdd.length; i++) {
            promise = promise.then(saveVideo(videosToAdd[i]));
        }

        for (i = 0; i < photosToDelete.length; i++) {
            promise = promise.then(deletePhoto(photosToDelete[i]));
        }

        for (i = 0; i < videosToDelete.length; i++) {
            promise = promise.then(deleteVideo(videosToDelete[i]));
        }

        return promise
            .then(() => this.saveEntity(entity))
            .then(() => { this.setState({loading: false}); })
            .catch((e) => {
                this.setState({loading: false});
                this.handleError(e);
            });
    }

    savePhoto(photo) {
        if (!photo) {
            throw new Error("Can't save empty photo");
        }
         return clientMultipart({
             method: 'POST',
             path:  `/admin/photos/${TableStore.state.tableName}`,
             entity: {
                 photo,
                 name: photo.name
             }
         });
    }

    saveVideo(video) {
        if (!video) {
            throw new Error("Can't save empty video");
        }
         return clientMultipart({
             method: 'POST',
             path:  `/admin/videos/${TableStore.state.tableName}`,
             entity: {
                 video,
                 name: video.name
             }
         });
    }

    deletePhoto(photoName) {
        if (!photoName) {
            throw new Error("Can't delete photo with empty name");
        }
        return client({
           method: 'DELETE',
           path: `/admin/photos/${TableStore.state.tableName}`,
           entity: {
               name: photoName
           }
       })
    }

    deleteVideo(videoName) {
        if (!videoName) {
            throw new Error("Can't delete video with empty name");
        }
        return client({
           method: 'DELETE',
           path: `/admin/videos/${TableStore.state.tableName}`,
           entity: {
               name: videoName
           }
       })
    }

    saveEntity(entity) {
        var controller = TableStore.state.controller;
        return client({
           method: 'PUT',
           path: `/api/${controller}/${entity.id}`,
           entity: entity
       }).then(response => {
           Actions.updateEntity(response.entity);
           this.setState({ editingEntity: null });
       }).catch(this.handleError);
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
        var controller = TableStore.state.controller;
        client({
            method: 'DELETE',
            path: `/api/${controller}/${id}`
        }).then(response => {
            Actions.deleteEntityById(id);
        }).catch((e) => {
            if (controller === "graduateClasses") {
                alert("Сначала удалите всех выпускников из этого класса");
            } else {
                handleError(e);
            }
        });
    }

    onAddEntityButtonClick(event) {
        var error = false;
        TableStore.state.properties.forEach(prop => {
            if (prop.type === "FOREIGN_ID" && TableStore.state.foreignEntities[prop.relatedEntity].length === 0) {
                alert(`Сначала заполните хотя бы один объект типа "${prop.columnName}"`);
                error = true;
                return;
            }
        });
        if (error) {
            return;
        }
        if (this.state.editingEntity === null) {
            this.setState({
                editingEntity: { isNew: true }
            });
        }
    }

    addEntity(entity, uploadedPhoto) {
        var controller = TableStore.state.controller;
        client({
            method: 'POST',
            path: `/api/${controller}/`,
            entity: entity
        }).then(response => {
            this.setState({ editingEntity: null });
            Actions.addEntity(response.entity);
        }).catch(this.handleError);
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
                case "PHOTO":
                    if (value) {
                        valueContent = (<img src={prop.path + value} className="entityTable_photo" alt="photo"/>)
                    } else {
                        valueContent = "";
                    }
                    break;
                case "PHOTOS_LIST":
                    var photos = value.map((name) => (<img
                        key={name}
                        src={prop.path + name}
                        className="entityTable_photoInList"
                        alt="photo"
                    />))
                    valueContent = <span>{photos}</span>;
                    break;
                case "VIDEOS_LIST":
                    var videos = value.map(name => (
                        <div key={name} className="entityTable_videoInList">
                            <a href={prop.path + name} title={name}>{name}</a>
                        </div>
                    ));
                    valueContent = <span>{videos}</span>;
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
            <RowForm key={entity.id} entity={entity} onSubmit={this.onFormSubmit} onCancel={this.onCancelEditButtonClick}/>
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
            rows.unshift(<RowForm key="-1" entity={this.state.editingEntity} onSubmit={this.addEntity} onCancel={this.onCancelEditButtonClick}/>);

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
                {this.state.loading && <Loader/>}
            </div>
        )
    }
}