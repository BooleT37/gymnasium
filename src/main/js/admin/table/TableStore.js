'use strict';

import Reflux from 'reflux';

import Actions from './Actions';

import {replaceNbsp} from  '../../utils';

var TableStore = Reflux.createStore({
    listenables: Actions,

    init: function () {
        this.state = window.clientModel;
        //replacing nbsp in graduate class
        if (this.state.foreignEntities && this.state.foreignEntities["GRADUATE_CLASS"])
            this.state.foreignEntities["GRADUATE_CLASS"] = this.state.foreignEntities["GRADUATE_CLASS"].map(e => {e.displayName = replaceNbsp(e.displayName); return e;});
        
        if (this.state.properties[this.state.properties.length - 1].name !== "controls")
            this.state.properties.push({
                name: "controls",
                type: "CONTROLS"
            })
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