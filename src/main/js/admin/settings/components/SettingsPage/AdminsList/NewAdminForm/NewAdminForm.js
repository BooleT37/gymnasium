'use strict';

import './NewAdminForm.css';

import React from 'react';
import update from 'immutability-helper';

import Actions from '../../../../Actions';
import client from '../../../../../../client';

export default class NewAdminForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                login: "",
                email: "",
                password: "",
                passwordRepeat: "",
                subscribed: false
            },
            isFormValid: false,
            errorMessage: ""
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        var input = e.currentTarget;
        if (!input.name)
            throw new Error("need name attribute!");
        var formMergeObj = {};
        var value = input.type === "checkbox" ? input.checked : input.value;
        formMergeObj[input.name] = value;

        if (input.name === "email")
            if (value.length > 0 && this.state.form.email.length === 0)
                formMergeObj.subscribed = true;
            if (value.length === 0 && this.state.form.email.length > 0)
                formMergeObj.subscribed = false;

        var newForm = update(this.state.form, {$merge: formMergeObj});
        var validationStatus = this.getFormValidationStatus(newForm);
        this.setState({form: newForm, isFormValid: validationStatus.valid, errorMessage: validationStatus.errorMessage});
    }

    getFormValidationStatus(form) {
        if (!form.password)
            return {
                valid: false,
                errorMessage: ""
            }
        if (!form.passwordRepeat)
            return {
                valid: false,
                errorMessage: ""
            }
        if (form.passwordRepeat !== form.password)
            return {
                valid: false,
                errorMessage: "пароли не совпадают"
            }
        if (!form.login)
            return {
                valid: false,
                errorMessage: ""
            }
        return {
            valid: true,
            errorMessage: ""
        }
    }

    handleError(error) {
        if (error.entity)
            switch (error.entity.error) {
                case "LoginAlreadyExistsException":
                    this.setState({isFormValid: false, errorMessage: "Админ с таким логином уже существует"});
                    break;
                case "EmailAlreadyInUseException":
                    this.setState({isFormValid: false, errorMessage: "Этот email уже используется другим админом"});
                    break;
                default:
                    this.setState({isFormValid: false, errorMessage: error.entity.message || "Неизвестная ошибка"});
            }
        else {
            this.setState({isFormValid: false, errorMessage: error.message || "Неизвестная ошибка"});
        }
        
    }

    onFormSubmit(e) {
        var form = this.state.form;
        e.preventDefault();
        client({
            method: 'POST',
            path: "/api/admins/",
            entity: form
        }).then(response => {
            Actions.addNewAdmin(response.entity);
            this.props.onClose();
        }).catch(error => {
            this.handleError(error);
        });
    }

    render() {
        var errorContainer = this.state.errorMessage ? <div className="personalSettings_error">{`Ошибка: ${this.state.errorMessage}`}</div> : null;
        return (
            <div className="newAdminForm settingsPage_form">
                <form onSubmit={this.onFormSubmit}>
                    <div className="settingsPage_form_line">
                        <label htmlFor="login" className="settingsPage_form_label">Логин:</label>
                        <input name="login" value={this.state.form.login} onChange={this.onInputChange}/>
                    </div>
                    <div className="settingsPage_form_line">
                        <label htmlFor="email" className="settingsPage_form_label">e-mail:</label>
                        <input name="email" value={this.state.form.email} onChange={this.onInputChange}/>
                    </div>
                    <div className="settingsPage_form_line">
                        <label htmlFor="password" className="settingsPage_form_label">Пароль:</label>
                        <input name="password" value={this.state.form.password} type="password" onChange={this.onInputChange}/>
                    </div>
                    <div className="settingsPage_form_line">
                        <label htmlFor="passwordRepeat" className="settingsPage_form_label">Повторите пароль:</label>
                        <input name="passwordRepeat" value={this.state.form.passwordRepeat} type="password" onChange={this.onInputChange}/>
                    </div>
                    <div className="settingsPage_form_line">
                        <label htmlFor="subscribed" className="settingsPage_form_label">Подписан на заявки:</label>
                        <input type="checkbox" name="subscribed" checked={this.state.form.subscribed} disabled={this.state.form.email.length === 0} onChange={this.onInputChange}/>
                    </div>
                    <div className="settingsPage_form_line">
                        <label className="settingsPage_form_label"></label>
                        <button type="submit" disabled={!this.state.isFormValid} onClick={this.onFormSubmit}>Отправить</button>
                    </div>
                    {errorContainer}
                </form>
            </div>
        )
    }
}