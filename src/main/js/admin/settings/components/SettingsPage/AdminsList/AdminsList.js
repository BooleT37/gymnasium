'use strict';

import './AdminsList.css';

import React from 'react';

import SettingsStore from '../../../SettingsStore';
import Actions from '../../../Actions';
import client from '../../../../../client';

import NewAdminForm from './NewAdminForm/NewAdminForm';

export default class AdminsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = Object.assign({addAdminFormShown: false}, SettingsStore.state);
        this.onSubscribtionChange = this.onSubscribtionChange.bind(this);
        this.closeNewAdminForm = this.closeNewAdminForm.bind(this);
        this.handleAddNewAdminButtonClick = this.handleAddNewAdminButtonClick.bind(this);
        this.handleDeleteAdminButtonClick = this.handleDeleteAdminButtonClick.bind(this);
    }

    componentDidMount() {
        SettingsStore.listen(state => this.setState(state));
    }

    handleError(message) {
        alert(`При отправке данных произошла ошибка:\nСообщение:\n${message || "[Сообщение об ошибке отсутствует]"}`);
    }

    onSubscribtionChange(event) {
        var checkbox = event.target;
        var adminLogin = checkbox.getAttribute("data-login");
        var checked = checkbox.checked;

        client({
                method: 'POST',
                path: "/api/admins/setSubscriptionStatus",
                entity: {
                    login: adminLogin,
                    status: checked
                }

            }).then(response => {
                Actions.setSubscriptionStatus(adminLogin, checked);
            }).catch(error => {
                this.handleError(error.entity ? error.entity.message : error.message);
            });
    }

    handleAddNewAdminButtonClick() {
        this.setState({addAdminFormShown: true});
    }

    closeNewAdminForm() {
        this.setState({addAdminFormShown: false});
    }

    handleDeleteAdminButtonClick(event) {
        var adminLogin = event.target.getAttribute("data-login");
        if (confirm("Действительно удалить?")) {
            client({
                method: 'DELETE',
                path: `/api/admins/${adminLogin}`
            }).then(response => {
                Actions.deleteAdminByLogin(adminLogin);
            }).catch(response => {
                this.handleError(response.entity ? response.entity.message : response.message);
            });
        }
    }

    render() {
        var admins = this.state.admins.map(admin => {
            var isCurrent = admin.login === this.state.login;
            var controlsCol = null;
            if (!isCurrent)
                controlsCol = (
                    <td className="adminsList_controlsCol">
                        <span className="adminsList_deleteLink" data-login={admin.login} onClick={this.handleDeleteAdminButtonClick}>Удалить</span>
                    </td>
                );
            return (
                <tr key={admin.login} className={isCurrent ? "adminsList_currentAdminRow" : null}>
                    <td>{admin.login}</td>
                    <td>{admin.email}</td>
                    <td>
                        <input
                            type="checkbox"
                            checked={admin.subscribed}
                            data-login={admin.login}
                            onChange={this.onSubscribtionChange}
                            disabled={!admin.email}
                            />
                    </td>
                    {controlsCol}
            </tr>);
        });

        var addAdminForm = this.state.addAdminFormShown ? <NewAdminForm onClose={this.closeNewAdminForm}/> : null;
        var cancelButton = this.state.addAdminFormShown ? <button type="button" className="adminsList_newAdminButton" onClick={this.closeNewAdminForm}>Отмена</button> : null;
        return (
            <div className="adminsList">
                <div className="adminsList_inner">
                    <h3 className="adminsList_title">Список администраторов:</h3>
                    <div className="adminsList_newAdminControls">
                        <button type="button" className="adminsList_newAdminButton" onClick={this.handleAddNewAdminButtonClick} disabled={this.state.addAdminFormShown}>Добавить</button>
                        {cancelButton}
                    </div>
                    {addAdminForm}
                    <table>
                        <thead>
                            <tr>
                                <td>Логин</td>
                                <td>E-mail</td>
                                <td>Подписан</td>
                                <td className="adminsList_controlsCol"></td>
                            </tr>
                        </thead>
                        <tbody>
                            {admins}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}