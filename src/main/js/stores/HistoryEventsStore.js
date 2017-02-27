'use strict';

import Reflux from 'reflux';
import moment from 'moment';


import Actions from '../actions/Actions';
import client from '../client';

import {parseDate} from '../utils';

var HistoryEventsStore = Reflux.createStore({
    listenables: Actions,

    init: function () {
        this.state = {}

        moment.locale('ru');
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

    convertSingleEvent(event) {
        event.date = parseDate(event.date);
        event.dateStr = event.date.format('LL');
        return event;
    },

    //convert date to Date object and sort list by dates
    convertList(events) {
        var res = events.map(this.convertSingleEvent);
        return events.sort((a, b) => a.date.unix() - b.date.unix());
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