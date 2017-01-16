'use strict';

import Reflux from 'reflux'
import Actions from '../actions/Actions'
import client from '../client'

var GraduateClassesStore = Reflux.createStore({
    listenables: Actions,

    init: function () {
        this.state = {
            classesDict: {},
            loaded: false
        }
    },

    lazyLoadGraduateClasses: function() {
        if (!this.state.loaded) {
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