'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions';
import client from '../client';

var HistoryEventsStore = Reflux.createStore({
    listenables: Actions,

    init: function () {
        this.state = {}
    },

    getEventByTypeAndId(type, id) {
        if (!this.state[type])
            throw new Error(`HistoryEvents of type '${type}' are not loaded yet`);
        id = parseInt(id, 10);
        var found = this.state[type].find(e => e.id === id);
        if (!found)
            throw new Error(`Cannot find HistoryEvent of type '${type}' with id ${id}`);
        return found;
    },

    //parse date from format dd.MM.yyyy
    parseDate(date) {
        var dateBits = date.split('.').map(bit => parseInt(bit, 10));
        return new Date(dateBits[2], dateBits[1], dateBits[0]);
    },

    convertSingleEvent(event) {
        event.date = this.parseDate(event.date);
        //todo: проверить во всех браузерах
        event.dateStr = event.date.toLocaleDateString('ru-RU', {year: "numeric", month: "long", day: "numeric"});
        return event;
    },

    //convert date to Date object and sort list by dates
    convertList(events) {
        var res = events.map(this.convertSingleEvent);
        return events.sort((a, b) => a.date.getTime() - b.date.getTime());
    },

    lazyLoadHistoryEventsOfType: function(type) {
        if (!this.state[type]) {
            client({
                method: 'GET',
                path: `/api/historyEvents/type/${type.toLowerCase()}`
            }).done(response => {
                this.state[type] = this.convertList(response.entity);
                this.trigger(this.state);
            });
        }
    }
});

export default HistoryEventsStore;