"use strict";

import './GraduateClass.css';

//external modules
import Reflux from 'reflux';
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

//local modules
import client from './../../client';
import {max, removeDuplicates} from '../../utils';
import Actions from '../../actions/Actions';
import GraduateClassesStore from '../../stores/GraduateClassesStore';

//React components
import ModalHeader from './../ModalHeader/ModalHeader';
import GraduatesList from './../GraduatesList/GraduatesList';
import GraduateInfo from './../GraduateInfo/GraduateInfo';


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
        this.onComponentUpdate(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.onComponentUpdate(nextProps);
    }

    componentDidMount() {
        this.unsubscribeFromStore = GraduateClassesStore.listen(this.onStoreLoaded.bind(this));
        this.unsubscribeFromShowGraduateInfoAction = Actions.showGraduateInfo.listen(this.showGraduateInfo);
    }

    routeTo(url) {
        this.props.router.push(url);
    }

    onStoreLoaded() {
        this.onPropsChange(this.props);
    }

    onPropsChange(props) {
        var storeState = GraduateClassesStore.state;
        if (!storeState.loaded) {
            this.setState({ loaded: false });
            return;
        }
        //location.hash is "#/GraduateClasses/:classId" or "#/GraduateClasses/:classId/graduates/:graduateId"
        if (props.params.classId) {
            this.setState(this.getStateForCurrentRouteParams(
                props.params.classId ? parseInt(props.params.classId, 10) : null,
                props.params.graduateId ? parseInt(props.params.graduateId, 10) : null
            ));
        } else {
        //location.hash is "#/GraduateClasses"
            var lastYear = max(Object.keys(storeState.classesDict));
            var currentClass = this.getFirstClass(storeState.classesDict[lastYear]);
            this.routeTo(`/graduateClasses/${currentClass.id}`);
        }
    }

    getStateForCurrentRouteParams(classId, graduateId) {
        var storeState = GraduateClassesStore.state;
        var classesDict = storeState.classesDict;
        var years = Object.keys(classesDict).map(y => parseInt(y, 10)).sort((a, b) => a - b);

        var currentClass = GraduateClassesStore.getClassById(classId);

        var currentYearIndex = years.indexOf(currentClass.graduateYear);
        var gradesAndCharacters = this.getAllClassesGradesAndCharacters(classesDict[currentClass.graduateYear]);

        return {
            loaded: true,
            currentClass: currentClass,
            previousYear: currentYearIndex === 0 ? null : years[currentYearIndex - 1],
            nextYear: currentYearIndex === years.length - 1 ? null : years[currentYearIndex + 1],
            grades: gradesAndCharacters.grades,
            characters: gradesAndCharacters.characters,
            selectedGraduateId: graduateId
        };
    }

    componentWillUnmount() {
        this.unsubscribeFromStore();
        this.unsubscribeFromShowGraduateInfoAction();
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

    onComponentUpdate(newProps) {
        Actions.lazyLoadGraduateClasses(newProps.classId);
        this.onPropsChange(newProps);
    }

    loadState() {
        this.onStoreLoaded(GraduateClassesStore.state);
            
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
        this.routeTo(`/graduateClasses/${currentClass.id}`);
    }

    changeClassCharacter(newCharacter) {
        var currentClass = this.state.currentClass;
        var grade = currentClass.grade;
        var graduateYear = currentClass.graduateYear;
        var storeState = GraduateClassesStore.state;
        var newGraduateClass = this.findClassByGradeAndCharacter(grade, newCharacter, storeState.classesDict[graduateYear]);
        this.routeTo(`/graduateClasses/${newGraduateClass.id}`);
    }

    changeClassGrade(newGrade) {
        var storeState = GraduateClassesStore.state;
        var currentClass = this.state.currentClass;
        var character = currentClass.character;
        var graduateYear = currentClass.graduateYear;
        var newGraduateClass = this.findClassByGradeAndCharacter(newGrade, character, storeState.classesDict[graduateYear])
        this.routeTo(`/graduateClasses/${newGraduateClass.id}`);
    }

    showGraduateInfo(graduate) {
        this.routeTo(`/graduateClasses/${this.state.currentClass.id}/graduates/${graduate.id}`);
    }

    findClassByGradeAndCharacter(grade, character, graduateclasses) {
        return graduateclasses.find(c => c.grade === grade && c.character === character);
    }

    render() {
        var state = this.state;

        var content;
        if (state.loaded === false) {
            content = <div className="graduateClass_loader">Загрузка списка классов...</div>
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

            var innerContent;
            if (this.state.selectedGraduateId) {
                innerContent = <GraduateInfo classId={state.currentClass.id} graduateId={state.selectedGraduateId}/>;
            } else {
                innerContent = 
                    <div className="graduateClass_photoContainer">
                        <img src={state.currentClass.photoName || NO_PHOTO_IMAGE_SRC} className="graduateClass_photo"></img>
                    </div>
            }
            content = [
                <div className="graduateClass_center" key="center">
                    {innerContent}
                    <GraduatesList classId={state.currentClass.id} selectedGraduateId={state.selectedGraduateId}></GraduatesList>
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