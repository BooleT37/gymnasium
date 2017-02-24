'use strict';

import './ChangePasswordForm.css';

import React from 'react';
import update from 'immutability-helper';

import SettingsStore from '../../../../SettingsStore';
import Actions from '../../../../Actions';
import client from '../../../../../../client';

export default class ChangePasswordForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                oldPassword: "",
                newPassword: "",
                newPasswordRepeat: ""
            },
            isFormValid: false,
            errorMessage: ""
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    onInputChange(e) {
        var input = e.currentTarget;
        if (!input.name)
            throw new Error("need name attribute!");
        var formMergeObj = {};
        var value = input.type === "checkbox" ? input.checked : input.value;
        formMergeObj[input.name] = value;
        var newForm = update(this.state.form, {$merge: formMergeObj});
        var validationStatus = this.getFormValidationStatus(newForm);
        this.setState({form: newForm, isFormValid: validationStatus.valid, errorMessage: validationStatus.errorMessage});
    }

    getFormValidationStatus(form) {
        if (!form.newPassword)
            return {
                valid: false,
                errorMessage: ""
            }
        if (!form.newPasswordRepeat)
            return {
                valid: false,
                errorMessage: ""
            }
        if (form.newPasswordRepeat !== form.newPassword)
            return {
                valid: false,
                errorMessage: "пароли не совпадают"
            }
        if (!form.oldPassword)
            return {
                valid: false,
                errorMessage: ""
            }
        if (form.newPassword === form.oldPassword)
            return {
                valid: false,
                errorMessage: "Старый и новый пароли совпадают"
            }
        return {
            valid: true,
            errorMessage: ""
        }
    }

    handleError(error) {
        if (error.entity)
            switch (error.entity.error) {
                case "WrongPasswordException":
                    this.setState({isFormValid: false, errorMessage: "Неверный старый пароль"});
                    break;
                default:
                    this.setState({isFormValid: false, errorMessage: error.entity.message || "Неизвестная ошибка"});
            }
        else {
            this.setState({isFormValid: false, errorMessage: error.message || "Неизвестная ошибка"});
        }
    }

    onFormSubmit(e) {
        e.preventDefault();
        var form = this.state.form;
        client({
            method: 'POST',
            path: "/api/admins/changePassword",
            entity: form
        }).then(response => {
            this.props.onClose();
        }).catch(error => {
            this.handleError(error);
        });
    }

    onCancel() {
        this.props.onClose();
    }

    render() {
        var errorContainer = this.state.errorMessage ? <div className="personalSettings_error">{`Ошибка: ${this.state.errorMessage}`}</div> : null;
        return (
            <div className="changePasswordForm settingsPage_form">
                <form onSubmit={this.onFormSubmit}>
                    <div className="settingsPage_form_line">
                        <label htmlFor="oldPassword" className="settingsPage_form_label">Старый пароль:</label>
                        <input type="password" name="oldPassword" value={this.state.form.oldPassword} onChange={this.onInputChange}/>
                    </div>
                    <div className="settingsPage_form_line">
                        <label htmlFor="newPassword" className="settingsPage_form_label">Новый пароль:</label>
                        <input type="password" name="newPassword" value={this.state.form.newPassword} onChange={this.onInputChange}/>
                    </div>
                    <div className="settingsPage_form_line">
                        <label htmlFor="newPasswordRepeat" className="settingsPage_form_label">Повторите пароль:</label>
                        <input type="password" name="newPasswordRepeat" value={this.state.form.newPasswordRepeat} onChange={this.onInputChange}/>
                    </div>
                    <div className="settingsPage_form_line">
                        <label className="settingsPage_form_label"></label>
                        <button className="changePasswordForm_button" type="submit" disabled={!this.state.isFormValid} onClick={this.onFormSubmit}>Отправить</button>
                        <button className="changePasswordForm_button" type="button" onClick={this.onCancel}>Отменить</button>
                    </div>
                </form>
                {errorContainer}
            </div>
        );
    }
}