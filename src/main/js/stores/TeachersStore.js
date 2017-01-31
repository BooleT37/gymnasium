'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions';
import client from '../client';

var TeachersStore = Reflux.createStore({
    listenables: Actions,

    init: function () {
        this.state = {
            list: [],
            loaded: false
        }
    },

    getTeacherById(id) {
        if (!this.state.loaded)
            throw new Error("TeachersStore is not loaded yet");
        var found = this.state.list.find(teacher => teacher.id === id);
        if (!found)
            throw new Error(`Cannot find teacher with id ${id}`);
        return found;
    },

    lazyLoadTeachers: function() {
        if (!this.state.loaded) {
            client({
                method: 'GET',
                path: '/api/teachers'
            }).done(response => {
                this.state = {
                    list: response.entity,
                    loaded: true
                };
                this.trigger(this.state);
            });
        }
    }
})

export default TeachersStore;