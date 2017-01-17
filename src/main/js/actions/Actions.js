'use strict';

import Reflux from 'reflux'
import client from '../client'

var Actions = Reflux.createActions([
    "lazyLoadGraduateClasses",
    "lazyLoadGraduatesForClass",
    "highlightGraduate",
    "showGraduateInfo"
]);

export default Actions;