'use strict';

import Reflux from 'reflux';

var Actions = Reflux.createActions([
    "addNewAdmin",
    "setSubscriptionStatus",
    "deleteAdminByLogin",
    "modifyCurrentAdmin"
]);

export default Actions;