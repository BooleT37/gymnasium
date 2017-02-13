'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions';
import client from '../client';

var SouvenirsStore = Reflux.createStore({
    listenables: Actions,

    init: function () {
        this.state = {
            list: [],
            listOffset: 0,
            loaded: false
        }
    },

    getSouvenirById: function(id) {
        if (!this.state.loaded)
            throw new Error("SouvenirsStore is not loaded yet");
        id = parseInt(id, 10);
        var found = this.state.list.find(souvenir => souvenir.id === id);
        if (!found)
            throw new Error(`Cannot find souvenir with id ${id}`);
        return found;
    },

    setSouvenirsListOffset: function(offset) {
        this.state = {
            list: this.state.list,
            listOffset: offset,
            loaded: this.state.loaded
        };
        this.trigger(this.state);
    },

    lazyLoadSouvenirs: function() {
        if (!this.state.loaded) {
            client({
                method: 'GET',
                path: '/api/souvenirs'
            }).done(response => {
                this.state = {
                    list: response.entity,
                    listOffset: this.state.listOffset,
                    loaded: true
                };
                this.trigger(this.state);
            });
        }
    }
});

export default SouvenirsStore;