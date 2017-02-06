'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions';

var InnerModalStateStore = Reflux.createStore({
    listenables: Actions,

    init: function () {
        this.state = {
            isShown: false,
            component: null
        }
    },

    showInnerModal: function(component) {
        this.state = {
            isShown: true,
            component: component
        }
        this.trigger(this.state);
    },

    hideInnerModal: function() {
        this.state = {
            isShown: false,
            component: null
        }
        this.trigger(this.state);
    }
});

export default InnerModalStateStore;