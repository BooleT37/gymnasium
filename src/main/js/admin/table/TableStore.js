'use strict';

import Reflux from 'reflux';

import Actions from './Actions';

var TableStore = Reflux.createStore({
    listenables: Actions,

    init: function () {
        this.state = window.clientModel;
    },

    getEntityById: function(id) {
        var found = this.state.entities.find(entity => entity.id === id);
        if (!found)
            throw new Error(`Cannot find entity with id ${id}`);
        return found;
    },

    getForeignEntityByValue: function(entityName, value) {
        var found = this.state.foreignEntities[entityName].find(entity => entity.value === value);
        if (!found)
            throw new Error(`Cannot find foreign entity with id ${id}`);
        return found;
    }
});

export default TableStore;