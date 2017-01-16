'use strict';

import Reflux from 'reflux'
import client from '../client'

var Actions = Reflux.createActions([
    "lazyLoadGraduateClasses",
    "lazyLoadGraduatesForClass",
    "showGraduateInfo"
]);

export default Actions;