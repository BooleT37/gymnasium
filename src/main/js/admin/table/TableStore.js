'use strict';

import Reflux from 'reflux';

import Actions from './Actions';

var TableStore = Reflux.createStore({
    listenables: Actions,

    init: function () {
        this.state = window.clientModel;
    },

    getEntityById: function() {
        var found = this.state.entities.find(entity => entity.id === id);
        if (!found)
            throw new Error(`Cannot find entity with id ${id}`);
        return found;
    }
});

export default TableStore;