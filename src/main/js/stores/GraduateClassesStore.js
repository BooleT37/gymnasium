'use strict';

import Reflux from 'reflux'
import Actions from '../actions/Actions'
import client from '../client'
import {concat} from '../utils';

var GraduateClassesStore = Reflux.createStore({
    listenables: Actions,

    init: function () {
        this.state = {
            classesDict: {},
            loaded: false
        }
    },

    getClassById: function(id) {
        if (!this.state.loaded)
            throw new Error("GraduateClassesStore is not loaded yet");
        return concat(Object.values(this.state.classesDict)).find(graduateClass => graduateClass.id === id);
    },

    lazyLoadGraduateClasses: function() {
        if (!this.state.loaded && !this.state.loading) {
            this.state.loading = true;
            client({
                method: 'GET',
                path: '/api/graduateClasses/groupByYear'
            }).done(response => {
                this.state = {
                    classesDict: response.entity,
                    loaded: true
                };
                this.trigger(this.state);
            });
        }
    }
});

export default GraduateClassesStore;