'use strict';

import './ChangeEmailForm.css';

import React from 'react';

import SettingsStore from '../../../../SettingsStore';
import Actions from '../../../../Actions';
import client from '../../../../../../client';

export default class ChangeEmailForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            isValid: false,
            errorMessage: ""
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    onInputChange(e) {
        var value = e.target.value;
        var validationStatus = this.getFormValidationStatus(value);
        this.setState({email: value, isValid: validationStatus.valid, errorMessage: validationStatus.errorMessage});
    }

    getFormValidationStatus(email) {
        if (!email)
            return {
                valid: false,
                errorMessage: ""
            }
        var currentEmail = SettingsStore.getCurrentAdmin().email;
        if (currentEmail && email.toLowerCase() === currentEmail.toLowerCase())
            return {
                valid: false,
                errorMessage: "Новый адрес совпадает со старым"
            }
        return {
            valid: true,
            errorMessage: ""
        }
    }

    handleError(error) {
        if (error.entity)
            switch (error.entity.error) {
                case "EmailAlreadyInUseException":
                    this.setState({isFormValid: false, errorMessage: "Этот email уже используется другим пользователем"});
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
            path: "/api/admins/changeEmail",
            entity: {email: this.state.email}
        }).then(response => {
            Actions.modifyCurrentAdmin({email: this.state.email})
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
            <div className="changeEmailForm settingsPage_form">
                <form onSubmit={this.onFormSubmit}>
                    <div className="settingsPage_form_line">
                        <label htmlFor="email" className="settingsPage_form_label">Email:</label>
                        <input name="email" value={this.state.email} onChange={this.onInputChange}/>
                    </div>
                    <div className="settingsPage_form_line">
                        <label className="settingsPage_form_label"></label>
                        <button className="changeEmailForm_button" type="submit" disabled={!this.state.isValid} onClick={this.onFormSubmit}>Отправить</button>
                        <button className="changeEmailForm_button" type="button" onClick={this.onCancel}>Отменить</button>
                    </div>
                    {errorContainer}
                </form>
            </div>
        );
    }
}