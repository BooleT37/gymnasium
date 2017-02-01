'use strict';

import './AdministrationSelector.css';

import React from 'react';
import classnames from 'classnames';

import Actions from '../../../actions/Actions';

import {fullNameToShortString} from '../../../utils';

const itemsInRow = 4;

export default class AdministrationSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            directorList: props.list.filter(i => i.position === 'DIRECTOR'),
            deputyDirectorList: props.list.filter(i => i.position === 'DEPUTY_DIRECTOR'),
            directorListOffset: 0,
            deputyDirectorListOffset: 0
        };

        this.shiftDirectorListLeft = this.shiftDirectorListLeft.bind(this);
        this.shiftDirectorListRight = this.shiftDirectorListRight.bind(this);
        this.shiftDeputyDirectorListLeft = this.shiftDeputyDirectorListLeft.bind(this);
        this.shiftDeputyDirectorListRight = this.shiftDeputyDirectorListRight.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
    }

    shiftDirectorListLeft() {
        this.setState({directorListOffset: this.state.directorListOffset - 1});
    }

    shiftDirectorListRight() {
        this.setState({directorListOffset: this.state.directorListOffset + 1});
    }

    shiftDeputyDirectorListLeft() {
        this.setState({deputyDirectorListOffset: this.state.deputyDirectorListOffset - 1});
    }

    shiftDeputyDirectorListRight() {
        this.setState({deputyDirectorListOffset: this.state.deputyDirectorListOffset + 1});
    }

    onItemClick(event) {
        Actions.routeTo(`/administration/${event.currentTarget.getAttribute("data-id")}`);
    }

    render() {
        function renderItem(obj) {
            var photoSrc = obj.photoName ? `/images/administration_photos/${obj.photoName}` : "images/no_photo.png";
            return (
                <div className="administrationSelector_item" onClick={this.onItemClick} key={obj.id} data-id={obj.id}>
                    <div className="administrationSelector_itemPhotoFrame">
                        <img className="administrationSelector_itemPhoto" src={photoSrc} alt="photo"/>
                    </div>
                    <div className="administrationSelector_itemName">
                        {fullNameToShortString(obj.lastName, obj.firstName, obj.patronymic)}
                    </div>
                </div>
            );
        }

        function renderRow(name, rowTitle, isLeftArrowDisabled, isRightArrowDisabled, onLeftArrowClick, onRightArrowClick, items) {
            return (
                <div className="administrationSelector_row">
                    <div className={`administrationSelector_rowTitle administrationSelector_rowTitle_${name}`}>
                        {rowTitle}
                    </div>
                    <div className="administrationSelector_rowSelector">
                        <div className="administrationSelector_arrowClickArea">
                            <div className={classnames(
                                "administrationSelector_arrow",
                                "administrationSelector_arrow_left",
                                {administrationSelector_arrow_disabled: isLeftArrowDisabled})
                            } onClick={onLeftArrowClick}></div>
                        </div>
                        <div className="administrationSelector_rowItems">
                            {items}
                        </div>
                        <div className="administrationSelector_arrowClickArea">
                            <div className={classnames(
                                "administrationSelector_arrow",
                                "administrationSelector_arrow_right",
                                {administrationSelector_arrow_disabled: isRightArrowDisabled})
                            } onClick={onRightArrowClick}></div>
                        </div>
                    </div>
                </div>
            )
        }

        var directorItems = this.state.directorList
            .slice(this.state.directorListOffset, this.state.directorListOffset + itemsInRow)
            .map(i => renderItem.call(this, i));
        var deputyDirectorItems = this.state.deputyDirectorList
            .slice(this.state.deputyDirectorListOffset, this.state.deputyDirectorListOffset + itemsInRow)
            .map(i => renderItem.call(this, i));

        return (
            <div className="administrationSelector">
                {renderRow.call(
                    this,
                    "directors",
                    "ДИРЕКТОРА",
                    this.state.directorListOffset === 0,
                    this.state.directorListOffset === this.state.directorList.length - itemsInRow,
                    this.shiftDirectorListLeft,
                    this.shiftDirectorListRight,
                    directorItems
                )}
                {renderRow.call(
                    this,
                    "deputyDirectors",
                    "ЗАМЕСТИТЕЛИ ДИРЕКТОРА",
                    this.state.deputyDirectorListOffset === 0,
                    this.state.deputyDirectorListOffset === this.state.deputyDirectorList.length - itemsInRow,
                    this.shiftDeputyDirectorListLeft,
                    this.shiftDeputyDirectorListRight,
                    deputyDirectorItems
                )}
            </div>
        )
    }
}