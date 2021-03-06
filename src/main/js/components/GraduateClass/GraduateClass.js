'use strict';

import './GraduateClass.css';

//external modules
import Reflux from 'reflux';
import React from 'react';
import classnames from 'classnames';

//local modules
import SelfUpdatingComponent from '../SelfUpdatingComponent';
import client from './../../client';
import {max, removeDuplicates} from '../../utils';
import Actions from '../../actions/Actions';
import GraduateClassesStore from '../../stores/GraduateClassesStore';

//React components
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import GraduatesList from './GraduatesList/GraduatesList';
import GraduateInfo from './GraduateInfo/GraduateInfo';
import ModalHeader from '../Modal/ModalHeader/ModalHeader';
import ModalFooter from '../Modal/ModalFooter/ModalFooter';

export default class GraduateClass extends SelfUpdatingComponent {
    constructor(props) {
        super(props);
        this.store = GraduateClassesStore;
        this.lazyLoadStoreAction = Actions.lazyLoadGraduateClasses;

        this.handlePreviousYearClick = this.handlePreviousYearClick.bind(this);
        this.handleNextYearClick = this.handleNextYearClick.bind(this);
        this.showGraduateInfo = this.showGraduateInfo.bind(this);
        this.handleAddGraduate = this.handleAddGraduate.bind(this);
        this.onYearInputChange = this.onYearInputChange.bind(this);
        this.onYearInputFocus = this.onYearInputFocus.bind(this);
    }

    onComponentUpdate(newProps) {
        Actions.lazyLoadGraduateClasses(newProps.classId);
        this.onPropsChange(newProps, GraduateClassesStore.state);
    }

    componentDidMount() {
        super.componentDidMount();
        this.unsubscribeFromShowGraduateInfoAction = Actions.showGraduateInfo.listen(this.showGraduateInfo);
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        this.unsubscribeFromShowGraduateInfoAction();
    }

    onPropsChange(props, storeState) {
        if (!storeState.loaded) {
            this.setState({ loaded: false });
            return;
        }
        var storeIsEmpty = true;
        for (var key in storeState.classesDict)
            if (storeState.classesDict.hasOwnProperty(key)) {
                storeIsEmpty = false;
                break;
            }
        if (storeIsEmpty) {
            this.setState({
                loaded: true,
                empty: true
            });
            return;
        }

        //location.hash is "#/GraduateClasses/:classId" or "#/GraduateClasses/:classId/graduates/:graduateId"
        if (props.params.classId) {
            var state;
            try {
                state = this.getStateForCurrentRouteParams(
                    props.params.classId ? parseInt(props.params.classId, 10) : null,
                    props.params.graduateId ? parseInt(props.params.graduateId, 10) : null
                );
            } catch(e) {
                if (console)
                    console.log(e.message);
                Actions.routeTo("/graduateClasses/");
                return;
            }
            this.setState(state);
        } else {
        //location.hash is "#/GraduateClasses"
            var lastYear = max(Object.keys(storeState.classesDict));
            var currentClass = this.getFirstClass(storeState.classesDict[lastYear]);
            Actions.routeTo(`/graduateClasses/${currentClass.id}`);
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
            years: years,
            yearInputState: {
                value: currentClass.graduateYear,
                valid: true,
                message: null 
            },
            previousYear: currentYearIndex === 0 ? null : years[currentYearIndex - 1],
            nextYear: currentYearIndex === years.length - 1 ? null : years[currentYearIndex + 1],
            grades: gradesAndCharacters.grades,
            characters: gradesAndCharacters.characters,
            selectedGraduateId: graduateId
        };
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
        Actions.routeTo(`/graduateClasses/${currentClass.id}`);
    }

    changeClassCharacter(newCharacter) {
        var currentClass = this.state.currentClass;
        var grade = currentClass.grade;
        var graduateYear = currentClass.graduateYear;
        var storeState = GraduateClassesStore.state;
        var newGraduateClass = this.findClassByGradeAndCharacter(grade, newCharacter, storeState.classesDict[graduateYear]);
        Actions.routeTo(`/graduateClasses/${newGraduateClass.id}`);
    }

    changeClassGrade(newGrade) {
        var storeState = GraduateClassesStore.state;
        var currentClass = this.state.currentClass;
        var character = currentClass.character;
        var graduateYear = currentClass.graduateYear;
        var newGraduateClass = this.findClassByGradeAndCharacter(newGrade, character, storeState.classesDict[graduateYear])
        Actions.routeTo(`/graduateClasses/${newGraduateClass.id}`);
    }

    showGraduateInfo(graduate) {
        Actions.routeTo(`/graduateClasses/${this.state.currentClass.id}/graduates/${graduate.id}`);
    }

    findClassByGradeAndCharacter(grade, character, graduateclasses) {
        return graduateclasses.find(c => c.grade === grade && c.character === character);
    }
    
    handleAddGraduate() {
        if (this.state.selectedGraduateId)
            Actions.routeTo(`/graduateClasses/${this.state.currentClass.id}/graduates/${this.state.selectedGraduateId}/addGraduate`);
        else
            Actions.routeTo(`/graduateClasses/${this.state.currentClass.id}/addGraduate`);
    }

    onYearInputChange(event) {
        var yearStr = event.currentTarget.value;
        if (yearStr.length > 4)
            return;
        if (yearStr.length < 4) {
            this.setState({yearInputState: {
                value: yearStr,
                valid: false,
                message: "Год дложен состоять из 4 цифр"
            }});
            return;
        }
        var year = parseInt(yearStr, 10);
        if (this.state.years.indexOf(year) !== -1) {
            if (this.state.currentClass.graduateYear === year) {
                this.setState({yearInputState: {
                    value: yearStr,
                    valid: true,
                    message: null
                }});
            } else {
                this.changeYear(year);
            }
        } else {
            this.setState({yearInputState: {
                value: yearStr,
                valid: false,
                message: "Для этого года нет ни одного класса"
            }});
        }
    }

    onYearInputFocus(event) {
        event.target.select();
    }

    render() {
        var state = this.state;

        if (state.loaded === false)
            return (
                <div className="graduateClass">
                    <ModalHeader title="ВЫПУСКНИКИ" iconType="leaf"/>
                    <div className="modal_content">
                        <div className="modal_loader">Загрузка списка классов...</div>
                    </div>
                    <ModalFooter/>
                </div>
            );
        if (state.empty === true)
            return (
                <div className="graduateClass">
                    <ModalHeader title="ВЫПУСКНИКИ" iconType="leaf"/>
                    <div className="modal_content">
                        <div className="modal_empty">Список выпускников пуст. Приносим свои извинения.</div>
                    </div>
                    <ModalFooter/>
                </div>
            );

        var photoElement = state.currentClass.photoName ? <img src={"/photos/classes/" + state.currentClass.photoName} className="graduateClass_photo"></img> : null;
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
                <div className="graduateClass_photoFrame">
                    <PhotoContainer height={500}>
                        {photoElement}
                    </PhotoContainer>
                </div>
        }
        var content = (
            <div className="modal_content graduateClass_center">
                {innerContent}
                <GraduatesList classId={state.currentClass.id} showInfoOnClick={state.selectedGraduateId !== undefined && state.selectedGraduateId !== null} selectedGraduateId={state.selectedGraduateId}></GraduatesList>
            </div>
        );
        var footer = (
            <ModalFooter>
                <div className="graduateClass_footerText graduateClass_graduateYearText">год выпуска</div>
                <div className="graduateClass_widget graduateClass_yearWidget">
                    <div className={classnames(
                        "graduateClass_yearSwitch",
                        "arrow_left",
                        { graduateClass_yearSwitch_disabled: !state.previousYear}
                    )} onClick={this.handlePreviousYearClick}></div>
                    <input
                        type="number"
                        maxLength={4}
                        className={classnames("graduateClass_graduateYear", {graduateClass_graduateYear_invalid: !state.yearInputState.valid})}
                        title={state.yearInputState.message}
                        value={state.yearInputState.value}
                        onChange={this.onYearInputChange}
                        onFocus={this.onYearInputFocus} />
                    <div className={classnames(
                        "graduateClass_yearSwitch",
                        "arrow_right",
                        { graduateClass_yearSwitch_disabled: !state.nextYear}
                    )} onClick={this.handleNextYearClick}></div>
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
                    <div className="graduateClass_addGraduateIcon" onClick={this.handleAddGraduate}></div>
                </div>
            </ModalFooter>
        );
        var backUrl = state.selectedGraduateId ? `/graduateClasses/${state.currentClass.id}` : null;
        return (
            <div className="graduateClass">
                <ModalHeader title="ВЫПУСКНИКИ" iconType="leaf" backUrl={backUrl}/>
                {content}
                {footer}
            </div>
        );
    }
}