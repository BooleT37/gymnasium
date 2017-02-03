'use strict';

import './GraduateEdit.css';
import './GraduateEdit-placeholders.css';

import React from 'react';
import MaskedInput from 'react-maskedinput';
import FileDrop from 'react-file-drop';

import GraduateClassesStore from '../../stores/GraduateClassesStore';

import ModalHeader from '../Modal/ModalHeader/ModalHeader';
import ModalFooter from '../Modal/ModalFooter/ModalFooter';
import {triggerClickEvent} from '../../utils';

/*
    Max width and height of photo image.
    Used during use image fitting
*/
const photoWidth = 198;
const photoHeight = 210;
const photoRatio = photoWidth / photoHeight;
const photoMarginLeft = 14;
const photoMarginTop = 13;

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

        this.state = {
            fio: "",
            birthDate: "",
            graduateYear: graduateYear,
            graduateClass: graduateClass,
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
        this.handlePhotoFrameClick = this.handlePhotoFrameClick.bind(this);
        this.handleFileDrop = this.handleFileDrop.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        // console.log(this.state);
        if (console)
            console.log("Отпарвка зарабоатет, когда появится админка");
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

    handlePhotoFrameClick() {
        triggerClickEvent(this.refs.fileInput);
    }

    handlePhotoChange(event) {
        this.handleFileDrop(event.target.files)
    }

    onPhotoLoad(photo) {
        var img = new Image();

        function onLoad() {
            var imgRatio = img.width / img.height

            var width, height, marginLeft = photoMarginLeft, marginTop = photoMarginTop;
            if (img.width < photoWidth && img.height < photoHeight) {
                width = img.width;
                height = img.height;
                marginLeft += (photoWidth - img.width) / 2;
                marginTop += (photoHeight - img.height) / 2;
            } else {
                if (imgRatio > photoRatio) {
                    width = photoWidth;
                    height = photoWidth / imgRatio;
                    marginTop += (photoHeight - height) / 2;
                } else {
                    width = photoHeight * imgRatio;
                    height = photoHeight;
                    marginLeft += (photoWidth - width) / 2;
                }
            }

            this.setState({
                photo: {
                    src: photo,
                    width: width,
                    height: height,
                    marginLeft: marginLeft,
                    marginTop: marginTop
                }
            });
        };

        img.onload = onLoad.bind(this);
        img.src = photo;
    }

    handleVkLinkChange(event) {
        this.setState({ vkLink: event.target.value});
    }

    handleFacebookLinkChange(event) {
        this.setState({ facebookLink: event.target.value});
    }

    handleFileDrop(files) {
        var reader  = new FileReader();

        reader.addEventListener("load", _ => { this.onPhotoLoad(reader.result) }, false);

        if (files[0]) {
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
        var image;
        if (this.state.photo) {
            var photo = this.state.photo;
            var style = {
                marginTop: photo.marginTop + "px",
                marginLeft: photo.marginLeft + "px"
            };
            image = <img src={photo.src} alt="photo" width={photo.width} height={photo.height} style={style}/>;
        } else {
            var style = {
                marginTop: photoMarginTop + "px",
                marginLeft: photoMarginLeft + "px"
            };
            image = <img src="/images/graduateEdit_addPhoto.png" alt="photo" width={photoWidth} height={photoHeight} style={style}/>;
        }

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
                            <input type="text" maxLength="4" value={this.state.graduateYear} onChange={this.handleGradateYearChange} className="graduateEdit_input_year"/>
                        </label>
                        <label className="classLabel">
                            класс
                            <input type="text" value={this.state.graduateClass} onChange={this.handleGraduateClassChange}  className="graduateEdit_input_class"/>
                        </label>
                    </div>
                    <textarea placeholder="ваши любимые предметы" value={this.state.favouriteSubjects} onChange={this.handleFavouriteSubjectsChange}  className="graduateEdit_input_fullWidth"/>
                    <textarea placeholder="ваши достижения" value={this.state.achievements} onChange={this.handleAchievementsChange}  className="graduateEdit_input_fullWidth"/>
                </div>
                <div className="graduateEdit_right">
                    <div className="graduateEdit_photoPrompt">загрузите ваше фото</div>
                    <input type="file" ref="fileInput" name="photo" className="graduateEdit_fileInput" onChange={this.handlePhotoChange}/>
                    <div className="photoFrame graduateEdit_photoFrame" onClick={this.handlePhotoFrameClick}>
                        {image}
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
                    <div className="graduateEdit_submitButton" onClick={this.handleSubmit}>ОТПРАВИТЬ АНКЕТУ</div>
                </ModalFooter>
            </div>
        );
    }
}