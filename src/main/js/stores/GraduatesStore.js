'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions';
import client from '../client';

var GraduatesStore = Reflux.createStore({
    listenables: Actions,

    init: function () {
        this.state = {}
    },

    getGraduateById(graduateId, classId) {
        var graduateList = this.state[classId];
        if (!graduateList)
            throw new Error(`GraduatesStore for classId ${classId} is not loaded yet`);
        var graduate = graduateList.find(g => g.id === graduateId);
        if (!graduate) {
            throw new Error(`Cannot find graduate with id ${graduateId} for class with id ${classId}`);
        }
        return graduate;
    },

    lazyLoadGraduatesForClass: function(classId) {
        if (!this.state[classId]) {
            this.state[classId] = { loading: true };
            client({
                method: 'GET',
                params: { class: classId },
                path: '/api/graduates/'
            }).done(response => {
                this.state[classId] = response.entity;
                this.trigger(this.state);
            });
        }
    }
});

export default GraduatesStore;