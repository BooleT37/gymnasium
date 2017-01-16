"use strict";

import Reflux from 'reflux';
import React from 'react';
import ReactDOM from 'react-dom';
import client from './../client';
import Actions from '../actions/Actions';
import GraduateClassesStore from '../stores/GraduateClassesStore';
import ModalHeader from './ModalHeader';

import {concat, min} from '../utils';
import classnames from 'classnames';
import {removeDuplicates} from '../utils';

import GraduatesList from './GraduatesList';

export default class GraduateClass extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }

    componentWillMount() {
        this.loadState();
    }

    componentWillReceiveProps() {
        this.loadState();
    }

    componentDidMount() {
        this.unsubscribe = GraduateClassesStore.listen(this.onStoreLoaded.bind(this));
    }

    onStoreLoaded(storeState) {
        //location.hash is "#/GraduateClasses/:classId"
        if (this.props.params.classId) {
            this.setState(this.getStateForCurrentClassId(storeState, parseInt(this.props.params.classId, 10) || null));
        } else {
        //location.hash is "#/GraduateClasses"
            var firstYear = min(Object.keys(storeState.classesDict));
            var currentClass = this.getFirstClass(storeState.classesDict[firstYear]);
            this.props.router.push(`/graduateClasses/${currentClass.id}`);
            this.setState({loaded: false});
        }
    }

    getStateForCurrentClassId(storeState, classId) {

        var classesDict = storeState.classesDict;
        var years = Object.keys(classesDict).sort((a, b) => b - a);

        var currentClass = concat(Object.values(classesDict)).find(graduateClass => graduateClass.id === classId)
        
        var currentYearIndex = years.indexOf(currentClass.graduateYear);
        var gradesAndCharacters = this.getAllClassesGradesAndCharacters(classesDict[currentClass.graduateYear]);

        return {
            loaded: true,
            currentClass: currentClass,
            previousYear: currentYearIndex === 0 ? null : currentClass.graduateYear - 1,
            nextYear: currentYearIndex === years.length - 1 ? null : currentClass.graduateYear + 1,
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

    render() {
        var state = this.state;

        var content;
        if (state.loaded === false) {
            content = <div className="graduateCLass_loader">Загрузочка...</div>
        } else {
            var grades = state.grades.map((grade, i) => 
                <div className={classnames(
                       'graduateClass_footerElement',
                       'graduateClass_grade', {
                           graduateClass_grade_current: grade === state.currentClass.grade
                       }
                   )} key={`grade_${i}`}></div>
            );
            var characters = state.characters.map((char, i) =>
                <div className={classnames(
                    'graduateClass_footerElement',
                    'graduateClass_character', {
                       graduateClass_character_current: char === state.currentClass.character
                    }
                   )} key={`char_${i}`}></div>
            );
            content = [
                <div className="graduateClass_center" key="center">
                    <div className="graduateClass_photo">Здесь фото</div>
                    <GraduatesList classId={state.currentClass.id}></GraduatesList>
                </div>,
                <div className="popup_footer" key="footer">
                    <div className="graduateClass_footerElement">год выпуска</div>
                    <div className={"graduateClass_footerElement graduateClass_yearSwitch" + state.previous ? '' : 'graduateClass_yearSwitch_disabled'}>назад</div>
                    <div className="graduateClass_footerElement">{state.currentClass.graduateYear}</div>
                    <div className={"graduateClass_footerElement graduateClass_yearSwitch" + state.previous ? '' : 'graduateClass_yearSwitch_disabled'}>вперед</div>
                    <div className="graduateClass_footerElement">класс</div>
                    {characters}
                    {grades}
                    <div className="graduateClass_footerElement graduateClass_addGraduate">Добавить анкету</div>
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