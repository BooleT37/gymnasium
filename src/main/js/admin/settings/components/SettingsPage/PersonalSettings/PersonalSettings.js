'use strict';

import './PersonalSettings.css';

import React from 'react';

import SettingsStore from '../../../SettingsStore';
import Actions from '../../../Actions';
import client from '../../../../../client';

import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm';
import ChangeEmailForm from './ChangeEmailForm/ChangeEmailForm';

export default class PersonalSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentAdmin: SettingsStore.getCurrentAdmin(),
            passwordChangeFormShown: false,
            emailChangeFormShwon: false
        }
        
        this.handleChangePasswordButtonClick = this.handleChangePasswordButtonClick.bind(this);
        this.handleChangeEmailButtonClick = this.handleChangeEmailButtonClick.bind(this);
        this.handleSubscriptionCheckboxChange = this.handleSubscriptionCheckboxChange.bind(this);
        this.closeChangePasswordForm = this.closeChangePasswordForm.bind(this);
        this.closeChangeEmailForm = this.closeChangeEmailForm.bind(this);
        this.handleDeleteEmailButtonClick = this.handleDeleteEmailButtonClick.bind(this);
    }

    componentDidMount() {
        SettingsStore.listen(state => {
            this.setState({currentAdmin: SettingsStore.getCurrentAdmin()});
        });
    }

    handleChangePasswordButtonClick() {
        this.setState({passwordChangeFormShown: true});
    }

    handleChangeEmailButtonClick() {
        this.setState({emailChangeFormShwon: true});
    }

    handleError(message) {
        alert(`При отправке данных произошла ошибка:\nСообщение:\n${message || "[Сообщение об ошибке отсутствует]"}`);
    }

    handleDeleteEmailButtonClick() {
        if (confirm("Действительно удалить?"))
            client({
                method: 'POST',
                path: "/api/admins/deleteEmail"
            })
            .then(response => {
                return client({
                    method: 'POST',
                    path: "/api/admins/setSubscriptionStatus",
                    entity: {
                        login: SettingsStore.state.login,
                        status: false
                    }});
            }).then(response => {    
                Actions.modifyCurrentAdmin({email: "", subscribed: false});
            }).catch(error => {
                this.handleError(error.entity ? error.entity.message : error.message);
            });
    }

    handleSubscriptionCheckboxChange(event) {
        this.setSubscriptionStatus(SettingsStore.state.login, event.target.checked);
    }

    setSubscriptionStatus(login, status) {
        client({
            method: 'POST',
            path: "/api/admins/setSubscriptionStatus",
            entity: {
                login: login,
                status: status
            }
        }).then(response => {
            Actions.setSubscriptionStatus(login, status);
        }).catch(error => {
            this.handleError(error.entity ? error.entity.message : error.message);
        });
    }

    closeChangePasswordForm() {
        this.setState({passwordChangeFormShown: false});
    }

    closeChangeEmailForm() {
        this.setState({emailChangeFormShwon: false});
    }
    
    render() {
        var current = this.state.currentAdmin;
        var email;
        var deleteEmailButton = null;
        if (current.email) {
            email = <b>{current.email}</b>
            deleteEmailButton = <span className="personalSettings_button personalSettings_button_email" onClick={this.handleDeleteEmailButtonClick}>Удалить</span>
        } else {
            email = <span className="personalSettings_email_empty">[отсутствует]</span>
        }
        var changePasswordForm = this.state.passwordChangeFormShown ? <ChangePasswordForm onClose={this.closeChangePasswordForm}/> : null;
        var changeEmailForm = this.state.emailChangeFormShwon ? <ChangeEmailForm onClose={this.closeChangeEmailForm}/> : null;
        return (
            <div className="personalSettings">
                <h3>Личные настройки:</h3>
                <div className="personalSettings_button" onClick={this.handleChangePasswordButtonClick}>Сменить пароль</div>
                {changePasswordForm}
                <div className="personalSettings_emailContainer">
                    <div>Текущий email:</div>
                    {email}&nbsp;
                    <span className="personalSettings_button personalSettings_button_email" onClick={this.handleChangeEmailButtonClick}>{current.email ? "Сменить" : "Добавить"}</span>
                    {deleteEmailButton}
                </div>
                {changeEmailForm}
                <div>Подписка на заявки: <input type="checkbox" disabled={!current.email} checked={this.state.currentAdmin.subscribed} onChange={this.handleSubscriptionCheckboxChange}/></div>
            </div>
        )
    }
}