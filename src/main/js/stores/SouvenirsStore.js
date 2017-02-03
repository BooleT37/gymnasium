'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions';
import client from '../client';

var SouvenirsStore = Reflux.createStore({
    listenables: Actions,

    init: function () {
        this.state = {
            list: [],
            loaded: false
        }
    },

    getSouvenirById(id) {
        if (!this.state.loaded)
            throw new Error("SouvenirsStore is not loaded yet");
        var found = this.state.list.find(teacher => teacher.id === id);
        if (!found)
            throw new Error(`Cannot find souvenir with id ${id}`);
        return found;
    },

    lazyLoadSouvenirs: function() {
        if (!this.state.loaded) {
            client({
                method: 'GET',
                path: '/api/souvenirs'
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

export default SouvenirsStore;