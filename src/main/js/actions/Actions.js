'use strict';

import Reflux from 'reflux';
import client from '../client';
import {hashHistory} from 'react-router';

var Actions = Reflux.createActions([
    "routeTo",
    "lazyLoadGraduateClasses",
    "lazyLoadGraduatesForClass",
    "highlightGraduate",
    "showGraduateInfo"
]);

Actions.routeTo.listen(url => { hashHistory.push(url) });

export default Actions;