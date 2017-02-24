'use strict';

import Reflux from 'reflux';
import update from 'immutability-helper';

import Actions from './Actions';
import client from '../../client';

const controller = "/api/admins";

var SettingsStore = Reflux.createStore({
    listenables: Actions,

    init: function () {
        this.state = window.clientModel;
        this.state.currentAdminIndex = this.getAdminIndexByLogin(this.state.login);
    },

    getCurrentAdmin: function() {
        return this.state.admins[this.state.currentAdminIndex];
    },

    setCurrentAdmin: function(admin) {
        this.state.admins[this.state.currentAdminIndex] = admin;
    },

    getAdminByLogin: function(login) {
        var found = this.state.admins.find(admin => admin.login === login);
        if (found === null)
            throw new Error(`Can't find admin with login ${login}`);
        return found;
    },

    getAdminIndexByLogin: function(login) {
        var found = this.state.admins.findIndex(admin => admin.login === login);
        if (found === -1)
            throw new Error(`Can't find admin with login ${login}`);
        return found;
    },

    addNewAdmin: function(admin) {
        this.state.admins.unshift(admin);
        this.trigger(this.state);
    },

    setSubscriptionStatus: function(adminLogin, status) {
        var adminIndex = this.state.admins.findIndex(admin => admin.login === adminLogin);
        var admin = this.state.admins[adminIndex];
        if (admin.subscribed !== status) {
            this.state.admins[adminIndex].subscribed = status;
            this.trigger(this.state);
        }
    },

    deleteAdminByLogin: function(login) {
        this.state.admins.splice(this.getAdminIndexByLogin(login), 1);
        this.trigger(this.state);
    },

    modifyCurrentAdmin: function(props) {
        this.setCurrentAdmin(update(this.getCurrentAdmin(), {$merge: props}));
        this.trigger(this.state);
    }
});

export default SettingsStore;