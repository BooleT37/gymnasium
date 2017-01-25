"use strict";

import './GraduateEdit.css';
import './GraduateEdit-placeholders.css';

import React from 'react';
import MaskedInput from 'react-maskedinput';

import ModalHeader from './../ModalHeader/ModalHeader';
import ModalFooter from './../ModalFooter/ModalFooter';

export default class GraduateEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fio: "",
            birthDate: "",
            graduateYear: "",
            graduateClass: "",
            favouriteSubjects: "",
            achievements: "",
            photo: null,
            vkLink: "",
            facebookLink: ""
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        console.log(this.state);
    }

    handleFioChange(event) {
        this.setState({ fio: event.target.value});
    }

    handleBirthDateChange(event) {
        this.setState({ birthDate: event.target.value});
    }

    handleGradateYearChange(event) {
        this.setState({ graduateYear: event.target.value});
    }

    handleGraduateClassChange(event) {
        this.setState({ graduateClass: event.target.value});
    }

    handleFavouriteSubjectsChange(event) {
        this.setState({ favouriteSubjects: event.target.value});
    }

    handleAchievementsChange(event) {
        this.setState({ achievements: event.target.value});
    }

    handlePhotoChange(event) {
        alert("Функция добавления фото заработает в следующем релизе!");
    }

    handleVkLinkChange(event) {
        this.setState({ vkLink: event.target.value});
    }

    handleFacebookLinkChange(event) {
        this.setState({ facebookLink: event.target.value});
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

        var content = (
            <form onSubmit={this.handleSubmit}>
                <div className="graduateEdit_left">
                    <input type="text" placeholder="ФИО" value={this.state.fio} onChange={this.handleFioChange} className="graduateEdit_input_fullWidth"/>
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
                            <input type="text" maxLength="4" value={this.state.graduateYear} onChange={this.handleGradateYearChange} className="graduateEdit_input_smallWidth"/>
                        </label>
                        <label className="classLabel">
                            класс
                            <input type="text" value={this.state.graduateClass} onChange={this.handleGraduateClassChange}  className="graduateEdit_input_smallWidth"/>
                        </label>
                    </div>
                    <textarea placeholder="ваши любимые предметы" value={this.state.favouriteSubjects} onChange={this.handleFavouriteSubjectsChange}  className="graduateEdit_input_fullWidth"/>
                    <textarea placeholder="ваши достижения" value={this.state.achievements} onChange={this.handleAchievementsChange}  className="graduateEdit_input_fullWidth"/>
                </div>
                <div className="graduateEdit_right">
                    <div className="graduateEdit_photoPrompt">загрузите ваше фото</div>
                    <div className="graduateEdit_photoFrame" onClick={this.handlePhotoChange}>
                        <img src="/images/graduateEdit_addPhoto.png" alt="photo" className="graduateEdit_photo" width="196" height="206"></img>
                    </div>
                    <div className="graduateEdit_linkRow">
                        <div className="graduateEdit_vkLogo"></div>
                        <input type="text" value={this.state.vkLink} onChange={this.handleVkLinkChange} className="graduateEdit_input_link" />
                    </div>
                    <div className="graduateEdit_linkRow">
                        <div className="graduateEdit_facebookLogo"></div>
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
                    <div className="graduateEdit_submitButton" onClick={this.handleSubmit}>ОТПРАВИТЬ АНКЕТУ</div>
                </ModalFooter>
            </div>
        );
    }
}