'use strict';

import './SettingsPage.css';

import React from 'react';

import SettingsStore from '../../SettingsStore';
import AdminsList from './AdminsList/AdminsList';
import PersonalSettings from './PersonalSettings/PersonalSettings';

export default class SettingsPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var storeState = SettingsStore.state;
        var login = storeState.login;
        return (
            <div className="settingsPage">
                <a href="/admin/">← Назад на главную страницу</a>
                <h2 className="settingsPage_title">{`Добро пожаловать, ${login}`}</h2>      
                <div className="settingsPage_left">
                    <AdminsList/>
                </div>
                <div className="settingsPage_right">
                    <PersonalSettings/>
                </div>
            </div>
        )
    }
}