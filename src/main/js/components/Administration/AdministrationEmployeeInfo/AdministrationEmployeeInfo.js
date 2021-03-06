"use strict";

import './AdministrationEmployeeInfo.css';
import React from 'react';

import PhotoContainer from '../../PhotoContainer/PhotoContainer';
import {fullNameToString} from '../../../utils';

export default class AdministrationEmployeeInfo extends React.Component {
    render() {
        var employee = this.props.employee;
        var photoSrc = employee.photoName ? `/photos/administration/${employee.photoName}` : "images/no_photo.png";

        function generateRow(rowTitle, rowContent) {
            return (
                <div className="administrationEmployeeInfo_row">
                    <span className="administrationEmployeeInfo_rowTitle">{rowTitle + ":"}</span>
                    <span className="administrationEmployeeInfo_rowContent">{rowContent}</span>
                </div>
            );
        }
        var birthDateRow = employee.birthDate ? generateRow("Дата рождения", employee.birthDate) : null;
        var yearsRow;
        if (employee.employmentYear || employee.releaseYear) {
            var yearsStr = ((employee.employmentYear && employee.releaseYear) ?
                `${employee.employmentYear} - ${employee.releaseYear} гг.` :
                (employee.employmentYear ? `c ${employee.employmentYear}` : "") + (employee.releaseYear ? `по ${employee.releaseYear}` : "") + " г.");
            
            yearsRow = generateRow(`Работа ${employee.position === "DIRECTOR" ? "директором" : "зам. директора"}`, yearsStr);
        } else {
            yearsRow = null;
        }

        return (
            <div className="administrationEmployeeInfo">
                <div className="administrationEmployeeInfo_left">
                    <div className="photoFrame administrationEmployeeInfo_photoFrame">
                        <PhotoContainer height={401}>
                            <img src={photoSrc} alt="photo" className="administrationEmployeeInfo_photo"></img>
                        </PhotoContainer>
                    </div>
                </div>
                <div className="administrationEmployeeInfo_right">
                    <div className="administrationEmployeeInfo_title">{fullNameToString(employee.firstName, employee.lastName, employee.patronymic)}</div>
                    {birthDateRow}
                    {yearsRow}
                </div>
            </div>
        )
    }
}