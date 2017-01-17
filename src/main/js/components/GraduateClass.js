"use strict";

import Reflux from 'reflux';
import React from 'react';
import ReactDOM from 'react-dom';
import client from './../client';
import Actions from '../actions/Actions';
import GraduateClassesStore from '../stores/GraduateClassesStore';
import ModalHeader from './ModalHeader';

import {concat, max} from '../utils';
import classnames from 'classnames';
import {removeDuplicates} from '../utils';

import GraduatesList from './GraduatesList';

const NO_PHOTO_IMAGE_SRC = "images/class_photos/no_photo.png";

export default class GraduateClass extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.handlePreviousYearClick = this.handlePreviousYearClick.bind(this);
        this.handleNextYearClick = this.handleNextYearClick.bind(this);
        this.showGraduateInfo = this.showGraduateInfo.bind(this);
    }

    componentWillMount() {
        this.loadState();
    }

    componentWillReceiveProps() {
        this.loadState();
    }

    componentDidMount() {
        this.unsubscribeFromStore = GraduateClassesStore.listen(this.onStoreLoaded.bind(this));
        this.unsubscribeFromShowGraduateInfoAction = Actions.showGraduateInfo.listen(this.showGraduateInfo);
    }

    onStoreLoaded(storeState) {
        //location.hash is "#/GraduateClasses/:classId"
        if (this.props.params.classId) {
            this.setState(this.getStateForCurrentClassId(storeState, parseInt(this.props.params.classId, 10) || null));
        } else {
        //location.hash is "#/GraduateClasses"
            var lastYear = max(Object.keys(storeState.classesDict));
            var currentClass = this.getFirstClass(storeState.classesDict[lastYear]);
            this.props.router.push(`/graduateClasses/${currentClass.id}`);
        }
    }

    getStateForCurrentClassId(storeState, classId) {
        var classesDict = storeState.classesDict;
        var years = Object.keys(classesDict).map(y => parseInt(y, 10)).sort((a, b) => a - b);

        var currentClass = concat(Object.values(classesDict)).find(graduateClass => graduateClass.id === classId)
        
        var currentYearIndex = years.indexOf(currentClass.graduateYear);
        var gradesAndCharacters = this.getAllClassesGradesAndCharacters(classesDict[currentClass.graduateYear]);

        return {
            loaded: true,
            currentClass: currentClass,
            previousYear: currentYearIndex === 0 ? null : years[currentYearIndex - 1],
            nextYear: currentYearIndex === years.length - 1 ? null : years[currentYearIndex + 1],
            grades: gradesAndCharacters.grades,
            characters: gradesAndCharacters.characters
        };
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getFirstClass(graduateClasses) {
        return graduateClasses.reduce((prev, current) => {
            if (current.grade < prev.grade)
                return current;
            else if (current.grade === prev.grade && current.letter < prev.letter)
                return current;
            return prev;
        });
    }

    getAllClassesGradesAndCharacters(graduateClasses) {
        return {
            grades: removeDuplicates(graduateClasses.map(c => c.grade)),
            characters: removeDuplicates(graduateClasses.map(c => c.character))
        };
    }

    loadState() {
        if (GraduateClassesStore.state.loaded) {
            this.onStoreLoaded(GraduateClassesStore.state);
        } else {
            Actions.lazyLoadGraduateClasses();
        }
    }

    handlePreviousYearClick() {
        if (this.state.previousYear === null)
            return;
        this.changeYear(this.state.previousYear);
    }

    handleNextYearClick() {
        if (this.state.nextYear === null)
            return;
        this.changeYear(this.state.nextYear);
    }

    changeYear(year) {
        var storeState = GraduateClassesStore.state; //Assuming that by this moment store is already loaded
        var currentClass = this.getFirstClass(storeState.classesDict[year]);
        this.props.router.push(`/graduateClasses/${currentClass.id}`);
    }

    changeClassCharacter(newCharacter) {
        var currentClass = this.state.currentClass;
        var grade = currentClass.grade;
        var graduateYear = currentClass.graduateYear;
        var storeState = GraduateClassesStore.state;
        var newGraduateClass = this.findClassByGradeAndCharacter(grade, newCharacter, storeState.classesDict[graduateYear]);
        this.props.router.push(`/graduateClasses/${newGraduateClass.id}`);
    }

    changeClassGrade(newGrade) {
        var storeState = GraduateClassesStore.state;
        var currentClass = this.state.currentClass;
        var character = currentClass.character;
        var graduateYear = currentClass.graduateYear;
        var newGraduateClass = this.findClassByGradeAndCharacter(newGrade, character, storeState.classesDict[graduateYear])
        this.props.router.push(`/graduateClasses/${newGraduateClass.id}`);
    }

    showGraduateInfo(graduate) {
        
    }

    findClassByGradeAndCharacter(grade, character, graduateclasses) {
        return graduateclasses.find(c => c.grade === grade && c.character === character);
    }

    render() {
        var state = this.state;

        var content;
        if (state.loaded === false) {
            content = <div className="graduateCLass_loader">Загрузка...</div>
        } else {
            var grades = state.grades.map((grade, i) => {
                if (grade === state.currentClass.grade)
                    return (<div className="graduateClass_grade graduateClass_grade_current" key={i}>{grade}</div>)
                else
                    return (<div className="graduateClass_grade" onClick={this.changeClassGrade.bind(this, grade)} key={`grade_${i}`}>{grade}</div>)
            });
            var characters = state.characters.map((char, i) => {
                if (char === state.currentClass.character)
                    return (<div className="graduateClass_character graduateClass_character_current" key={i}>{char}</div>)
                else
                    return (<div className="graduateClass_character" onClick={this.changeClassCharacter.bind(this, char)} key={i}>{char}</div>)
            });
            content = [
                <div className="graduateClass_center" key="center">
                    <div className="graduateClass_photoContainer">
                        <img src={state.currentClass.photoName || NO_PHOTO_IMAGE_SRC} className="graduateClass_photo"></img>
                    </div>
                    <GraduatesList classId={state.currentClass.id}></GraduatesList>
                </div>,
                <hr key="hr" className="modal_hr modal_footerHr"/>,
                <div className="popup_footer" key="footer">
                    <div className="graduateClass_footerText graduateClass_graduateYearText">год выпуска</div>
                    <div className="graduateClass_widget graduateClass_yearWidget">
                        <div className={"graduateClass_yearSwitch" + (state.previousYear ? '' : ' graduateClass_yearSwitch_disabled')} onClick={this.handlePreviousYearClick}>◂</div>
                        <div className="graduateClass_graduateYear">{state.currentClass.graduateYear}</div>
                        <div className={"graduateClass_yearSwitch" + (state.nextYear ? '' : ' graduateClass_yearSwitch_disabled')} onClick={this.handleNextYearClick}>▸</div>
                    </div>
                    <div className="graduateClass_footerText graduateClass_graduateClassText">класс</div>
                    <div className="graduateClass_widget graduateClass_gradeWidget">
                        {grades}
                    </div>
                    <div className="graduateClass_widget graduateClass_characterWidget">
                        {characters}
                    </div>
                    <div className="graduateClass_addGraduate">
                        <div className="graduateClass_addGraduateText">добавить<br/>анкету</div>
                        <div className="graduateClass_addGraduateIcon"></div>
                    </div>
                </div>
            ]
    	}
        return (
            <div className="graduateClass">
                <ModalHeader title="ВЫПУСКНИКИ" iconType="leaf"/>
                {content}
            </div>
        );
    }
}