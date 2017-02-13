'use strict';

import './Traditions.css';

import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import ModalHeader from '../Modal/ModalHeader/ModalHeader';
import ModalFooter from '../Modal/ModalFooter/ModalFooter';

import Actions from '../../actions/Actions';
import HistoryEventsStore from '../../stores/HistoryEventsStore';

export default class Traditions extends React.Component {
    render() {
        function renderItem(columnNumber, iconType, name, linkTo) {
            return (
                <Link to={`/traditions/${linkTo}`} className={`traditions_column traditions_column_${columnNumber.toString()}`}>
                    <div className={`tradition_icon tradition_icon_${iconType}`}></div>
                    <div className="traditions_itemName">{name}</div>
                </Link>
            )
        }


        return (
            <div className="traditions">
                <ModalHeader title="ТРАДИЦИИ" iconType="cup"/>
                <div className="modal_content traditions_content">
                    <div className="traditions_row">
                        {renderItem(1, "scroll", "ЛИТЕРАТУРНЫЕ ГОСТИННЫЕ", "literature_club")}
                        {renderItem(2, "bulbs", "НАУКА", "science")}
                    </div>
                    <div className="traditions_row">
                        {renderItem(1, "darts", "СПОРТ", "sport")}
                        {renderItem(2, "map", "ПУТЕШЕСТВИЯ", "travel")}
                    </div>
                    <div className="traditions_row">
                        {renderItem(1, "easel", "ТВОРЧЕСТВО", "art")}
                    </div>
                </div>
                <ModalFooter/>
            </div>
        )
    }
}