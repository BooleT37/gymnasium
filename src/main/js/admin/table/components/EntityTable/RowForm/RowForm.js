'use strict';

import './RowForm.css';

import React from 'react';
import update from 'immutability-helper';

import {isoToServer, serverToIso} from './RowForm-dateConverter';
import {replaceNbsp} from '../../../../../utils';

import TableStore from '../../../TableStore';

import FilesListEdit from './FilesListEdit/FilesListEdit';
import SimpleFilesListEdit from './SimpleFilesListEdit/SimpleFilesListEdit';

const inputTypes = {
    STRING: "text",
    LINK: "text",
    NUMBER: "number",
    DATE: "date",
    LIST: "text", //todo сделать несколько инпутов
    // PHOTO, PHOTOS_LIST, TEXT, SELECT, BOOLEAN, FOREIGN_ID и CONTROLS обрабатываются отдельно
}

var MAX_FILE_SIZE = 1048576000;

export default class RowForm extends React.Component {
    constructor(props) {
        super(props);

        var form = {};
        var properties = TableStore.state.properties;
        var entity = this.props.entity;

        var photosList = [];
        var videosList = [];

        properties.forEach(prop => {
            var value = entity[prop.name];
            if (value === null || value === undefined)
                value = "";
            if (value && prop.type === "DATE") {
                value = serverToIso(value);
            }
            if (value && prop.type === "LIST")
                value = value ? value.join(", ") : "";

            if (value && prop.type === "PHOTOS_LIST") {
                photosList = value.map((name) => ({
                    name,
                    newFile: null,
                    deleted: false
                }));
            }

            if (value && prop.type === "PHOTO") {
                photosList = [{
                    name: value,
                    newFile: null,
                    deleted: false
                }];
            }

            if (value && prop.type === "VIDEOS_LIST") {
                videosList = value.map((name) => ({
                    name,
                    newFile: null,
                    deleted: false
                }));
            }

            //for new entities to set default select value
            if (prop.nullable === false && !value) {
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
            }
            form[prop.name] = value;
        });

        this.state = {
            form,
            photosList,
            videosList,
            photoEditorDisabled: false,
            videosEditorDisabled: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
        this.handlePhotoChange = this.handlePhotoChange.bind(this);
        this.handlePhotoDelete = this.handlePhotoDelete.bind(this);
        this.handlePhotoAddInList = this.handlePhotoAddInList.bind(this);
        this.handleVideoAddInList = this.handleVideoAddInList.bind(this);
        this.handlePhotoAddInSimpleList = this.handlePhotoAddInSimpleList.bind(this);
        this.handleVideoAddInSimpleList = this.handleVideoAddInSimpleList.bind(this);
        this.handlePhotoDeleteFromList = this.handlePhotoDeleteFromList.bind(this);
        this.handleVideoDeleteFromList = this.handleVideoDeleteFromList.bind(this);
        this.handlePhotoDeleteFromSimpleList = this.handlePhotoDeleteFromSimpleList.bind(this);
        this.handleVideoDeleteFromSimpleList = this.handleVideoDeleteFromSimpleList.bind(this);
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

    handleInputKeyPress(target) {
        if(target.charCode==13){
            this.handleFormSubmit();
        }
    }

    handlePhotoChange(event) {
        var input = event.target;
        var fieldName = input.name;
        var photo = input.files[0];

        this.setState((oldState) => ({
            photosList: [{
                 name: photo.name,
                 newFile: photo,
                 deleted: false
            }],
            form: Object.assign(
                oldState.form,
                {[fieldName]: photo.name}
            )
        }));
    }

    handlePhotoDelete(fieldName) {
        var photoName = this.state.photosList[0].name;

        this.setState((oldState) => ({
            photosList: [{
                 name: photoName,
                 newFile: null,
                 deleted: true
            }],
            form: Object.assign(
                oldState.form,
                {[fieldName]: ""}
            )
        }));
    }

    handlePhotoAddInList(input, photo, fieldName) {
        var photoName = photo.name;
        var photosList = this.state.photosList;
        var photoNames = getFileNames(photosList)
        if (photoNames.find((name) => name === photoName)) {
            alert(`Фото с названием ${photoName} уже существует!`);
            input.value = null;
            return;
        }
        if (photo.size >= MAX_FILE_SIZE) {
            alert(`Размер фото (${photo.size}b) превышает максимально допустимый размер файлов для загрузки (${MAX_FILE_SIZE}b)`);
            input.value = null;
            return;
        }
        var newPhotosList = photosList.concat({
             name: photoName,
             newFile: photo,
             deleted: false
        })

        this.setState((oldState) => ({
            photosList: newPhotosList,
            form: Object.assign(
                oldState.form,
                {[fieldName]: getFileNames(newPhotosList)}
            )
        }));
        input.value = null;
    }

    handlePhotoAddInSimpleList(photoName, fieldName) {
        var photoNames = this.state.form[fieldName];
        if (photoNames.find((name) => name === photoName)) {
            alert(`Фото с названием ${photoName} уже существует!`);
            return;
        }

        this.setState((oldState) => ({
            form: Object.assign(
                oldState.form,
                {[fieldName]: photoNames.concat([photoName])}
            )
        }));
    }

    handleVideoAddInList(input, video, fieldName) {
       var videoName = video.name;
       var videosList = this.state.videosList;
       var videoNames = getFileNames(videosList)
       if (videoNames.find((name) => name === videoName)) {
           alert(`Видео с названием ${videoName} уже существует!`);
           input.value = null;
           return;
       }
        if (video.size >= MAX_FILE_SIZE) {
            alert(`Размер видео (${video.size}b) превышает максимально допустимый размер файлов для загрузки (${MAX_FILE_SIZE}b)`);
            input.value = null;
            return;
        }

       var newVideosList = videosList.concat({
            name: videoName,
            newFile: video,
            deleted: false
       })

       this.setState((oldState) => ({
           videosList: newVideosList,
           form: Object.assign(
               oldState.form,
               {[fieldName]: getFileNames(newVideosList)}
           )
       }));
       input.value = null;
    }

    handleVideoAddInSimpleList(videoName, fieldName) {
        var videoNames = this.state.form[fieldName];
        if (videoNames.find((name) => name === videoName)) {
            alert(`Видео с названием ${videoName} уже существует!`);
            return;
        }

        this.setState((oldState) => ({
            form: Object.assign(
                oldState.form,
                {[fieldName]: videoNames.concat([videoName])}
            )
        }));
    }

    handlePhotoDeleteFromList(fieldName, photoName) {
        var photosList = this.state.photosList;
        var photoIndex = photosList.findIndex((photo) => photo.name === photoName)
        if (photoIndex === -1) {
            alert(`Фото с названием ${photoName} не существует!`);
            return;
        }
        var newPhotosList = photosList.slice();
        newPhotosList[photoIndex] = {
            name: photoName,
            newFile: photosList[photoIndex].newFile,
            deleted: true
        }

        this.setState((oldState) => ({
            photosList: newPhotosList,
            form: Object.assign(
                oldState.form,
                {[fieldName]: getFileNames(newPhotosList)}
            )
        }));
    }

    handlePhotoDeleteFromSimpleList(fieldName, photoName) {
        var photosList = this.state.form[fieldName].slice();
        var photoIndex = photosList.findIndex((name) => name === photoName)
        if (photoIndex === -1) {
            alert(`Фото с названием ${photoName} не существует!`);
            return;
        }

        photosList.splice(photoIndex, 1);

        this.setState((oldState) => ({
            form: Object.assign(
                oldState.form,
                {[fieldName]: photosList}
            )
        }));
    }

    handleVideoDeleteFromSimpleList(fieldName, videoName) {
        var videosList = this.state.form[fieldName].slice();
        var videoIndex = videosList.findIndex((name) => name === videoName)
        if (videoIndex === -1) {
            alert(`Видео с названием ${videoName} не существует!`);
            return;
        }

        videosList.splice(videoIndex, 1);

        this.setState((oldState) => ({
            form: Object.assign(
                oldState.form,
                {[fieldName]: videosList}
            )
        }));
    }

    handleVideoDeleteFromList(fieldName, videoName) {
        var videosList = this.state.videosList;
        var videoIndex = videosList.findIndex((video) => video.name === videoName)
        if (videoIndex === -1) {
            alert(`Видео с названием ${videoName} не существует!`);
            return;
        }
        var newVideosList = videosList.slice();
        newVideosList[videoIndex] = {
            name: videoName,
            newFile: videosList[videoIndex].newFile,
            deleted: true
        }

        this.setState((oldState) => ({
            videosList: newVideosList,
            form: Object.assign(
                oldState.form,
                {[fieldName]: getFileNames(newVideosList)}
            )
        }));
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

            if (prop.type === "LIST") {
                value = value.split(", ");
                if (value.length === 1 && !value[0])
                    value = [];
            }

            if (!value && (prop.type === "PHOTOS_LIST" || prop.type === "VIDEOS_LIST")) {
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

        var photosToAdd = this.state.photoEditorDisabled
            ? []
            : this.state.photosList
                .filter(photo => !photo.deleted && photo.newFile)
                .map(photo => photo.newFile);
        var videosToAdd = this.state.videosEditorDisabled
            ? []
            : this.state.videosList
                .filter(video => !video.deleted && video.newFile)
                .map(video => video.newFile);
        var photosToDelete = this.state.photoEditorDisabled
            ? []
            : this.state.photosList
                .filter(photo => !photo.newFile && photo.deleted)
            .map(photo => photo.name)
        var videosToDelete = this.state.videosEditorDisabled
            ? []
            : this.state.videosList
                .filter(video => !video.newFile && video.deleted)
                .map(video => video.name);
        this.props.onSubmit(form, photosToAdd, videosToAdd, photosToDelete, videosToDelete)
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
                    case("PHOTO"):
                        content = (
                            (<div>
                                {value && (
                                    <div className="rowForm_currentPhotoName">
                                        Текущее фото: {value}
                                        <span
                                            className="rowForm_deletePhotoButton"
                                            onClick={() => this.handlePhotoDelete(prop.name)}
                                            title="Удалить фото"
                                        >
                                            ✕
                                        </span>
                                    </div>)}
                                <input
                                    name={prop.name}
                                    type="file"
                                    accept="image/*"
                                    onChange={this.handlePhotoChange}
                                />
                            </div>
                            )
                        )
                        break;
                    case("PHOTOS_LIST"):
                        content = (
                            <div>
                                {this.state.photoEditorDisabled ? (
                                    <SimpleFilesListEdit
                                        fileNames={value || []}
                                        onAdd={(fileName) => { this.handlePhotoAddInSimpleList(fileName, prop.name)}}
                                        onDelete={(name) => this.handlePhotoDeleteFromSimpleList(prop.name, name)}
                                    />
                                ) : (
                                    <FilesListEdit
                                        fileNames={value || []}
                                        onAdd={(input) => { this.handlePhotoAddInList(input, input.files[0], prop.name)}}
                                        onDelete={(name) => this.handlePhotoDeleteFromList(prop.name, name)}
                                    />
                                )}
                                <div className="rowForm_simpleEditorCheckbox">
                                    <input
                                        id="photosListInput"
                                        type="checkbox"
                                        value={this.state.photoEditorDisabled}
                                        onChange={(event) => { this.setState({photoEditorDisabled: event.target.checked}); }}
                                    />
                                    <label htmlFor="photosListInput" className="rowForm_simpleEditorLabel">Редактировать только названия</label>
                                </div>
                            </div>
                        );
                        break;
                    case("VIDEOS_LIST"):
                        content = (
                            <div>
                                {this.state.videoEditorDisabled ? (
                                    <SimpleFilesListEdit
                                        fileNames={value || []}
                                        onAdd={(fileName) => { this.handleVideoAddInSimpleList(fileName, prop.name)}}
                                        onDelete={(name) => this.handleVideoDeleteFromSimpleList(prop.name, name)}
                                    />
                                ) : (
                                    <FilesListEdit
                                        fileNames={value || []}
                                        onAdd={(input) => { this.handleVideoAddInList(input, input.files[0], prop.name)}}
                                        onDelete={(name) => this.handleVideoDeleteFromList(prop.name, name)}
                                    />
                                )}
                                <div className="rowForm_simpleEditorCheckbox">
                                    <input
                                        id="videosListInput"
                                        type="checkbox"
                                        value={this.state.photoEditorDisabled}
                                        onChange={(event) => { this.setState({videoEditorDisabled: event.target.checked}); }}
                                    />
                                    <label htmlFor="videosListInput" className="rowForm_simpleEditorLabel">Редактировать только названия</label>
                                </div>
                            </div>
                        );
                        break;
                    case("CONTROLS"):
                        content = (
                            <div className="rowForm_controls">
                                <button type="button" onClick={this.handleFormSubmit} disabled={this.props.loading}>Сохранить</button>
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
        );
    }
}

function getFileNames(files) {
    return files.filter(file => !file.deleted).map(file => file.name);
}