"use strict";

import './TeacherInfo.css';
import React from 'react';

import {fullNameToString} from '../../../utils';

export default class TeacherInfo extends React.Component {
    render() {
        var teacher = this.props.teacher;
        var photoSrc = teacher.photoName ? `/images/teacher_photos/${teacher.photoName}` : "images/no_photo.png";

        function generateRow(rowTitle, rowContent) {
            return (
                <div className="teacherInfo_row">
                    <span className="teacherInfo_rowTitle">{rowTitle + ":"}</span>
                    <span className="teacherInfo_rowContent">{rowContent}</span>
                </div>
            );
        }
        var birthDateRow = teacher.birthDate ? generateRow("Дата рождения", teacher.birthDate) : null;
        var subjectsRow = teacher.subjects && teacher.subjects.length ?
            generateRow(teacher.subjects.length > 1 ? "Предметы" : "Предмет", teacher.subjects.join(", ")) :
            null;
        var yearsRow;
        if (teacher.employmentYear || teacher.releaseYear) {
            var yearsStr = ((teacher.employmentYear && teacher.releaseYear) ?
                `${teacher.employmentYear} - ${teacher.releaseYear} гг.` :
                (teacher.employmentYear ? `c ${teacher.employmentYear}` : "") + (teacher.releaseYear ? `по ${teacher.releaseYear}` : "") + " г.");
            
            yearsRow = generateRow("Годы работы в гимназии", yearsStr);
        } else {
            yearsRow = null;
        }

        return (
            <div className="teacherInfo">
                <div className="teacherInfo_left">
                    <div className="photoFrame teacherInfo_photoFrame">
                        <img src={photoSrc} alt="photo" className="teacherInfo_photo" width="290" height="306"></img>
                    </div>
                </div>
                <div className="teacherInfo_right">
                    <div className="teacherInfo_title">{fullNameToString(teacher.lastName, teacher.firstName, teacher.patronymic)}</div>
                    {birthDateRow}
                    {subjectsRow}
                    {yearsRow}
                </div>
            </div>
        )
    }
}