'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions';
import client from '../client';

var AdministrationStore = Reflux.createStore({
    listenables: Actions,

    init: function () {
        this.state = {
            list: [],
            loaded: false
        }
    },

    getEmployeeById(id) {
        if (!this.state.loaded)
            throw new Error("AdministrationStore is not loaded yet");
        var found = this.state.list.find(employee => employee.id === id);
        if (!found)
            throw new Error(`Cannot find administration employee with id ${id}`);
        return found;
    },

    lazyLoadAdministration: function() {
        if (!this.state.loaded) {
            client({
                method: 'GET',
                path: '/api/administration'
            }).done(response => {
                this.state = {
                    list: response.entity,
                    loaded: true
                };
                this.trigger(this.state);
            });
        }
    }
});

export default AdministrationStore;