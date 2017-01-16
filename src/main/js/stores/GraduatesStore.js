'use strict';

import Reflux from 'reflux'
import Actions from '../actions/Actions'
import client from '../client'

var GraduatesStore = Reflux.createStore({
    listenables: Actions,

    init: function () {
        this.state = {}
    },

    lazyLoadGraduatesForClass: function(classId) {
        if (!this.state[classId]) {
            client({
                method: 'GET',
                path: `/api/graduates/class/${classId}`
            }).done(response => {
                this.state[classId] = response.entity;
                this.trigger(this.state);
            });
        }
    }
});

export default GraduatesStore;