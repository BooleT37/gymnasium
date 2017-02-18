'use strict';

import './GraduateEdit.css';
import './GraduateEdit-placeholders.css';

import React from 'react';
import MaskedInput from 'react-maskedinput';
import FileDrop from 'react-file-drop';
import classnames from 'classnames';
import update from 'immutability-helper';

import Actions from '../../actions/Actions';
import client from '../../client';
import GraduateClassesStore from '../../stores/GraduateClassesStore';

import ModalHeader from '../Modal/ModalHeader/ModalHeader';
import ModalFooter from '../Modal/ModalFooter/ModalFooter';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import {triggerClickEvent} from '../../utils';

const requiredFields = {
    fio: true,
    graduateYear: true,
    graduateClass: true
}


export default class GraduateEdit extends React.Component {
    constructor(props) {
        super(props);
        var graduateClass = "";
        var graduateYear = "";
        var classId = parseInt(props.params.classId);
        if (GraduateClassesStore.state.loaded && classId) {
            var graduateClassObj = GraduateClassesStore.getClassById(classId);
            graduateClass = `${graduateClassObj.grade} ${graduateClassObj.character}`;
            graduateYear = graduateClassObj.graduateYear;
        }

        var requiredFeldsState = {}

        for (var field in requiredFields) {
            if (requiredFields.hasOwnProperty(field))
                requiredFeldsState[field] = { valid: false, highlighted: false }
        }

        this.state = {
            form: {
                fio: "",
                birthDate: "",
                graduateYear: graduateYear,
                graduateClass: graduateClass,
                favouriteSubjects: "",
                achievements: "",
                photo: null,
                photoName: "",
                vkLink: "",
                facebookLink: ""
            },
            requiredFeldsState: requiredFeldsState,
            isFormValid: false
        };

        this.handleFioChange = this.handleFioChange.bind(this);
        this.handleBirthDateChange = this.handleBirthDateChange.bind(this);
        this.handleGradateYearChange = this.handleGradateYearChange.bind(this);
        this.handleGraduateClassChange = this.handleGraduateClassChange.bind(this);
        this.handleFavouriteSubjectsChange = this.handleFavouriteSubjectsChange.bind(this);
        this.handleAchievementsChange = this.handleAchievementsChange.bind(this);
        this.handlePhotoChange = this.handlePhotoChange.bind(this);
        this.handleVkLinkChange = this.handleVkLinkChange.bind(this);
        this.handleFacebookLinkChange = this.handleFacebookLinkChange.bind(this);
        this.handlePhotoFrameClick = this.handlePhotoFrameClick.bind(this);
        this.handleFileDrop = this.handleFileDrop.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Common validation function for all fields. Now only validates that field is not empty
    validateField(fieldName, fieldValue) {
        return requiredFields[fieldName] && fieldValue.length > 0;
    }

    handleSubmit() {
        if (this.state.isFormValid === false) {
            var requiredFeldsState = this.state.requiredFeldsState;
            var requiredFeldsStateCopy = {}
            for (var field in requiredFields) {
                if (requiredFields.hasOwnProperty(field))
                    requiredFeldsStateCopy[field] = {
                        valid: requiredFeldsState[field].valid,
                        highlighted: !requiredFeldsState[field].valid
                    }
            }
            this.setState({requiredFeldsState: requiredFeldsStateCopy});

            //setTimeout for fields to become highlighted before alert appears
            window.setTimeout(_ => {alert("Поля \"ФИО\", \"год выпуска\" и \"класс\" обязательны для заполнения")}, 0);
            return;
        }
        client({
                method: 'POST',
                path: `/api/graduates/sendRequest`,
                entity: this.state.form
            }).then(response => {
                console.log(response.entity);
            }).catch(response => {
                console.log(response.entity);
            });
            
        //Optimistic behavior
        alert("Спасибо за вашу заявку. Она будет рассмотрена в ближайшее время");
        var backUrl
        var params = this.props.params;
        if (params.classId)
            if (params.graduateId)
                backUrl = `/graduateClasses/${params.classId}/graduates/${params.graduateId}`;
            else
                backUrl = `/graduateClasses/${params.classId}`;
        else
            backUrl = `/graduateClasses/`;
        Actions.routeTo(backUrl);
    }

    handleTextFieldChange(fieldName, fieldValue) {
        var mergeObject = {};
        mergeObject[fieldName] = fieldValue;
        if (requiredFields[fieldName] === true) {
            var stateMergeObject = {};
            var isFieldValid = this.validateField(fieldName, fieldValue)
            var fieldState = {
                valid: isFieldValid,
                highlighted: !isFieldValid
            }
            stateMergeObject[fieldName] = fieldState;

            var allFieldsValid;
            if (isFieldValid) {
                allFieldsValid = true;
                for (var field in requiredFields) {
                    if (requiredFields.hasOwnProperty(field) && field !== fieldName)
                        if (this.state.requiredFeldsState[field].valid === false) {
                            allFieldsValid = false;
                            break;
                        }
                }
            } else {
                allFieldsValid = false;
            }
            this.setState(update(this.state, { form: {$merge: mergeObject}, requiredFeldsState: {$merge: stateMergeObject}, isFormValid: {$set: allFieldsValid}}));
        } else {
            this.setState(update(this.state, { form: {$merge: mergeObject}}));
        }
    }

    handleFioChange(event) {
        this.handleTextFieldChange("fio", event.target.value);
    }

    handleBirthDateChange(event) {
        this.handleTextFieldChange("birthDate", event.target.value);
    }

    handleGradateYearChange(event) {
        this.handleTextFieldChange("graduateYear", event.target.value);
    }

    handleGraduateClassChange(event) {
        this.handleTextFieldChange("graduateClass", event.target.value);
    }

    handleFavouriteSubjectsChange(event) {
        this.handleTextFieldChange("favouriteSubjects", event.target.value);
    }

    handleAchievementsChange(event) {
        this.handleTextFieldChange("achievements", event.target.value);
    }

    handlePhotoFrameClick() {
        triggerClickEvent(this.refs.fileInput);
    }

    handlePhotoChange(event) {
        this.handleFileDrop(event.target.files)
    }

    onPhotoLoad(photo, photoName) {
        this.setState(update(this.state, { form: {$merge: {photo: photo, photoName: photoName}}}));
    }

    handleVkLinkChange(event) {
        this.handleTextFieldChange("vkLink", event.target.value);
    }

    handleFacebookLinkChange(event) {
        this.handleTextFieldChange("facebookLink", event.target.value);
    }

    handleFileDrop(files) {
        if (files[0]) {
            var reader  = new FileReader();
            reader.addEventListener("load", _ => { this.onPhotoLoad(reader.result, files[0].name) }, false);
            reader.readAsDataURL(files[0]);
        }
    }

    render() {
        var params = this.props.params;
        var backUrl;
        if (params.classId)
            if (params.graduateId)
                backUrl = `/graduateClasses/${params.classId}/graduates/${params.graduateId}`;
            else
                backUrl = `/graduateClasses/${params.classId}`;
        else
            backUrl = null;
        var image = <img src={this.state.form.photo || "/images/graduateEdit_addPhoto.png"} alt="photo"/>;

        var content = (
            <form onSubmit={this.handleSubmit}>
                <div className="graduateEdit_left">
                    <input
                        type="text"
                        placeholder="ФИО"
                        value={this.state.fio}
                        onChange={this.handleFioChange}
                        className={classnames(
                            "graduateEdit_input_fullWidth",
                            {graduateEdit_input_highlighted: this.state.requiredFeldsState.fio.highlighted === true}
                        )}
                        />
                    <MaskedInput
                        value = {this.state.birthDate}
                        mask="11.11.11"
                        size="20"
                        onChange={this.handleBirthDateChange}
                        className="graduateEdit_birthDateInput graduateEdit_input_fullWidth"
                        placeholder="дата рождения (день.месяц.год.)"
                    />
                    <div className="graduateEdit_yearAndClass">
                        <label>
                            год выпуска
                            <input
                                type="text"
                                maxLength="4"
                                value={this.state.graduateYear}
                                onChange={this.handleGradateYearChange}
                                className={classnames("graduateEdit_input_year", {graduateEdit_input_highlighted: this.state.requiredFeldsState.graduateYear.highlighted})}
                                />
                        </label>
                        <label className="classLabel">
                            класс
                            <input
                                type="text"
                                value={this.state.graduateClass}
                                onChange={this.handleGraduateClassChange}
                                className={classnames("graduateEdit_input_class", {graduateEdit_input_highlighted: this.state.requiredFeldsState.graduateClass.highlighted})}
                            />
                        </label>
                    </div>
                    <textarea placeholder="ваши любимые предметы" value={this.state.favouriteSubjects} onChange={this.handleFavouriteSubjectsChange}  className="graduateEdit_input_fullWidth"/>
                    <textarea placeholder="ваши достижения" value={this.state.achievements} onChange={this.handleAchievementsChange}  className="graduateEdit_input_fullWidth"/>
                </div>
                <div className="graduateEdit_right">
                    <div className="graduateEdit_photoPrompt">загрузите ваше фото</div>
                    <input type="file" ref="fileInput" name="photo" className="graduateEdit_fileInput" onChange={this.handlePhotoChange}/>
                    <div className={classnames("photoFrame", "graduateEdit_photoFrame", {graduateEdit_photoFrame_empty: !this.state.photoSrc})} onClick={this.handlePhotoFrameClick}>
                        <PhotoContainer height={211}>
                            {image}
                        </PhotoContainer>
                        <FileDrop targetAlwaysVisible={true} onDrop={this.handleFileDrop}>Перетащите фото сюда</FileDrop>
                    </div>
                    <div className="graduateEdit_linkRow">
                        <div className="graduateEdit_socialLogo vkLogo"></div>
                        <input type="text" value={this.state.vkLink} onChange={this.handleVkLinkChange} className="graduateEdit_input_link" />
                    </div>
                    <div className="graduateEdit_linkRow">
                        <div className="graduateEdit_socialLogo facebookLogo"></div>
                        <input type="text" value={this.state.facebookLink} onChange={this.handleFacebookLinkChange} className="graduateEdit_input_link" />
                    </div>
                </div>
            </form>
        );
        return (
            <div className="graduateEdit">
                <ModalHeader title="АНКЕТА ВЫПУСКНИКА" iconType="leaf" backUrl={backUrl}/>
                <div className="graduateEdit_content modal_content">
                    {content}
                </div>
                <ModalFooter>
                    <div className={classnames("graduateEdit_submitButton", {graduateEdit_submitButton_disabled: this.state.isFormValid === false})} onClick={this.handleSubmit}>ОТПРАВИТЬ АНКЕТУ</div>
                </ModalFooter>
            </div>
        );
    }
}